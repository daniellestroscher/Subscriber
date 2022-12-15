import React, { useState } from "react";
import "./sub-form.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Notification, Subscription } from "../../Types";
import {
  postSubNotification,
  deleteSub,
  editSub,
  postNewSub,
} from "../../api-service/api-service";
import SubFormItem from "../SubFormItem/sub-form-item";
import { getMessageToken } from "../../firebase";
import { DateTime } from "luxon";

type Props = {
  subscription?: Subscription;
  setSubs: React.Dispatch<React.SetStateAction<Subscription[] | undefined>>;
  subscriptions: Subscription[];
};

function SubForm({ subscription, setSubs, subscriptions }: Props) {
  let initialState: Subscription;
  let apiServiceMethod: (formData: Subscription) => void;

  if (subscription) {
    let slicedStart = subscription.start.slice(0, 10);
    subscription.start = slicedStart;

    let correctTimeZoneOfReminder = DateTime.fromISO(subscription.reminderDate).setZone('America/Los_Angeles').toISO();
    subscription.reminderDate = correctTimeZoneOfReminder;

    initialState = subscription;

    apiServiceMethod = editSub;
  } else {
    initialState = {
      icon: "./add-image-icon.png",
      price: 0,
      title: "",
      start: "",
      cycle: "Monthly",
      category: "",
      reminderDate: "",
      prettyStart: "",
    };
    apiServiceMethod = postNewSub;
  }

  const [imageFile, setImageFile] = useState<File | undefined>();
  const [sub, setSub] = useState(initialState);
  const navigate = useNavigate();
  const imageUploader = React.useRef<HTMLInputElement>(null);

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", imageFile || "");
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET || "");
    data.append(
      "cloud_name",
      process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || ""
    );

    let imgData = await fetch(process.env.REACT_APP_CLOUDINARY_URL || "", {
      method: "POST",
      body: data,
    });
    imgData = await imgData.json();
    console.log(imgData);
    return imgData;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let dateTime = DateTime.fromISO(sub.start);
    const prettyStart = dateTime.toLocaleString(DateTime.DATE_FULL);

    let icon = sub.icon;
    if (imageFile) icon = (await uploadImage()).url;
    const subscriptionData = {
      icon,
      price: sub.price,
      title: sub.title,
      category: sub.category,
      start: sub.start,
      prettyStart,
      cycle: sub.cycle,
      reminderDate: sub.reminderDate,
      _id: subscription?._id,
    };

    let returnedData = Promise.resolve(apiServiceMethod(subscriptionData));
    returnedData.then((res: Subscription | void) => {
      console.log(res);
      let match = subscriptions.filter((sub) => sub._id === res?._id);
      console.log(match, subscriptions);
      if (match.length) {
        let filteredSubs = subscriptions.filter((sub) => sub._id !== res?._id);
        setSubs([...filteredSubs, res] as Subscription[]);
      } else {
        setSubs([...subscriptions, res] as Subscription[]);
      }
    });

    if (sub.reminderDate) {
      //const delay = new Date(sub.reminderDate).getTime() - new Date().getTime();
      const delay = DateTime.fromISO(sub.reminderDate).toMillis() - DateTime.now().toMillis();
      console.log(delay)
      const token = (await getMessageToken()) || "";
      const notification: Notification = {
        token,
        title: sub.title,
        price: sub.price,
        delay: delay,
      };
      postSubNotification(notification);
    }

    navigate("/");
  };

  const handleDelete = () => {
    if (subscription?._id) deleteSub(subscription._id.toString());
    let subsMinusDelete = subscriptions.filter(
      (subs) => subs._id !== subscription?._id
    );
    setSubs([...subsMinusDelete]);
    navigate("/");
  };

  return (
    <div className="form-cont">
      <form onSubmit={handleSubmit} className="form-inputs">
        <section className="add-sub-header">
          <input
            type="file"
            accept="image/*"
            multiple={false}
            onChange={(e) => {
              setSub({ ...sub, icon: URL.createObjectURL(e.target.files![0]) });
              setImageFile(e.target.files![0]);
            }}
            ref={imageUploader}
            style={{ display: "none" }}
          ></input>
          <div
            className="icon-display"
            onClick={() => {
              if (imageUploader.current) {
                imageUploader.current.click();
              }
            }}
          >
            <img className="icon" src={sub.icon} alt="Add Icon" />
          </div>
          <div className="payment-info">
            <SubFormItem
              label="Price:"
              placeholder="Price"
              data={sub.price}
              onChange={(e) =>
                setSub({ ...sub, price: parseInt(e.target.value) })
              }
              type="number"
              hasSection={false}
            />
            <select
              className="cycle-select"
              name="cycle"
              onChange={(e) => setSub({ ...sub, cycle: e.target.value })}
            >
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
            </select>
          </div>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} className="back-btn" />
          </Link>
        </section>

        {/* FORM BODY */}
        <div className="form-body">
          <SubFormItem
            label="Title: "
            placeholder="Title"
            data={sub.title}
            onChange={(e) => setSub({ ...sub, title: e.target.value })}
            type="string"
          />
          <select
            className="category-select"
            name="category"
            onChange={(e) => setSub({ ...sub, category: e.target.value })}
          >
            <option value="Select Category">Select Category</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Education">Education</option>
            <option value="Work">Work</option>
            <option value="Home">Home</option>
            <option value="Food">Food</option>
            <option value="Other">Other</option>
          </select>
          <SubFormItem
            label="First Payment: "
            placeholder="First Payment Date"
            data={sub.start}
            onChange={(e) => {
              setSub({ ...sub, start: e.target.value });
            }}
            type="date"
          />
          <SubFormItem
            label="Remind Me: "
            placeholder={"First Reminder Date"}
            data={sub.reminderDate.slice(0, -8)}
            onChange={(e) => {
              setSub({
                ...sub,
                reminderDate: DateTime.fromISO(e.target.value).toString(),
              });
              console.log(DateTime.fromISO(e.target.value).toString());
            }}
            type="datetime-local"
            min={DateTime.now().toString().slice(0, 16)}
          />
          <section>
            {subscription ? (
              <button
                className="submit-form-btn"
                type="button"
                onClick={() => handleDelete()}
              >
                Delete Subscription
              </button>
            ) : null}
            <button className="submit-form-btn" type="submit">
              {subscription ? "Edit" : "Add"} Subscription
            </button>
          </section>
        </div>
      </form>
    </div>
  );
}

export default SubForm;

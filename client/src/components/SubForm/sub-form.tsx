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

type Props = {
  subscription?: Subscription;
};

function SubForm({ subscription }: Props) {
  let initialState: Subscription;
  let apiServiceMethod: (formData: Subscription) => void;

  if (subscription) {
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
    return imgData;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let dateTime = new Date(sub.start);
    const prettyStart = dateTime.toDateString();
    let icon = sub.icon;
    if (imageFile) icon = (await uploadImage()).url;

    apiServiceMethod({
      icon,
      price: sub.price,
      title: sub.title,
      category: sub.category,
      start: sub.start,
      prettyStart,
      cycle: sub.cycle,
      reminderDate: new Date(sub.reminderDate).toISOString(),
      _id: subscription?._id,
    });

    if (sub.reminderDate) {
      const delay = new Date(sub.reminderDate).getTime() - new Date().getTime();
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
            data={sub.title}
            onChange={(e) => setSub({ ...sub, title: e.target.value })}
            type="string"
          />
          <label className="input-label">Category:</label>
          <select
            className="category-select"
            name="category"
            onChange={(e) => setSub({ ...sub, category: e.target.value })}
          >
            <option value="entertainment">entertainment</option>
            <option value="education">education</option>
            <option value="work">work</option>
            <option value="home">home</option>
            <option value="food">food</option>
            <option value="other">other</option>
          </select>
          <SubFormItem
            label="First Payment: "
            data={new Date(sub.start).toLocaleDateString("en-ca")}
            onChange={(e) => setSub({ ...sub, start: e.target.value })}
            type="date"
          />
          <SubFormItem
            label="Remind Me: "
            data={sub.reminderDate.slice(0, -8)}
            onChange={(e) =>
              setSub({
                ...sub,
                reminderDate: new Date(e.target.value).toISOString(),
              })
            }
            type="datetime-local"
            min={new Date().toISOString().slice(0, -8)}
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

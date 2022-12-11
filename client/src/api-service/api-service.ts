import { Subscription, Notification } from "../Types";

const brandToken = process.env.REACT_APP_BRAND_API_TOKEN;
const baseApiURL = process.env.REACT_APP_BRAND_API_BASE_URL;
const baseURL = process.env.REACT_APP_BASE_URL;

const getAllSubs = async () => {
 let res = await fetch(`${baseURL}/subscriptions`);
 return await res.json() as Array<Subscription>;
}


const postNewSub = async (subscription:Subscription) => {
  let res = await fetch(`${baseURL}/subscriptions`, {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  })
  return await res.json();
}

const editSub = async (updatedSub:Subscription) => {
  let res = await fetch(`${baseURL}/subscriptions`, {
    method: 'PUT',
    body: JSON.stringify(updatedSub),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  })
  return await res.json();
}

const deleteSub = async (uid:string) => {
    await fetch(`${baseURL}/subscriptions`, {
    method: 'DELETE',
    body: JSON.stringify({id: uid}),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  })
}

const postSubNotification = async (notificationData:Notification) => {
  await fetch(`${baseURL}/notify`, {
    method: 'POST',
    body: JSON.stringify(notificationData),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  })
}

const putToken = async (token:string, uid:string) => {
  await fetch(`${baseURL}/user-token`, {
    method: 'PUT',
    body: JSON.stringify({token: token, userId: uid}),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  })
}

const getSubOptions = async (domain:string) => {
  let res = await fetch(`${baseApiURL}${domain}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer' + brandToken,
    }
  });
  return await res.json();
}

export {
  getAllSubs,
  postNewSub,
  editSub,
  deleteSub,
  postSubNotification,
  putToken,
  getSubOptions,
}
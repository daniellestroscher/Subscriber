export type Subscription = {
  _id?: number;
  icon:string;
  price: number;
  title: string;
  category: string;
  start: string;
  prettyStart:string;
  cycle: string;
  reminderDate: string;
}

export type Notification = {
  token: string;
  title: string;
  price: number;
  delay: number;
}

export type MessageFirebase = {
  data:{
    title:string;
    body:string
  }
}
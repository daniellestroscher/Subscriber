import React from 'react';
import { Subscription } from '../../Types';
import SubForm from '../SubForm/sub-form';
import { useParams } from 'react-router-dom';

type Props = {
  subscriptions?: Array<Subscription>;
  setSubs: React.Dispatch<React.SetStateAction<Subscription[] | undefined>>
}

function EditSubItem({ subscriptions, setSubs }: Props) {
  const { id } = useParams();

  if (!subscriptions) return null;

  const subscription = subscriptions.find((sub) => sub._id === id)

  return (<>
    <SubForm subscription={subscription} subscriptions={subscriptions} setSubs={setSubs} />
  </>);
}

export default EditSubItem;
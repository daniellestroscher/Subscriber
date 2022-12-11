import React from 'react';
import { Subscription } from '../../Types';
import SubForm from '../SubForm/sub-form';
import { useParams } from 'react-router-dom';

type Props = {
  subscriptions?: Array<Subscription>;
}

function EditSubItem({ subscriptions }: Props) {
  const { id } = useParams();

  if (!subscriptions) return null;

  const subscription = subscriptions.find((sub) => sub._id === id)

  return (<>
    <SubForm subscription={subscription} />
  </>);
}

export default EditSubItem;
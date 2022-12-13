import "./add-sub-form.css";
import React from "react";
import "react-datalist-input/dist/styles.css";
import SubForm from "../SubForm/sub-form";
import { Subscription } from '../../Types';

type Props = {
  setSubs: React.Dispatch<React.SetStateAction<Subscription[] | undefined>>
  subscriptions: Subscription[];
};

function AddSubForm({ setSubs, subscriptions }: Props) {
  return (
    <>
      <SubForm subscriptions={subscriptions} setSubs={setSubs} />
    </>
  );
}

export default AddSubForm;

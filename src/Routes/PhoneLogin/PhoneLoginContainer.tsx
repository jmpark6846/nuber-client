import React from "react";
import PhoneLoginPresenter from "./PhoneLoginPresenter";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";

interface IState {
  countryCode: string;
  phoneNumber: string;
}
class PhoneLoginContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  state = {
    countryCode: "+82",
    phoneNumber: ""
  };
  public render() {
    return (
      <PhoneLoginPresenter {...this.state} onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
    );
  }

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: { name, value }
    } = event;

    this.setState({
      [name]: value
    } as any);
  };

  public onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { countryCode, phoneNumber } = this.state;
    const isValid = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(`${countryCode}${phoneNumber}`)
    if(isValid){
      return;
    }else{
      toast.error('전화번호가 유효하지 않습니다.')
    }
  }
}

export default PhoneLoginContainer;

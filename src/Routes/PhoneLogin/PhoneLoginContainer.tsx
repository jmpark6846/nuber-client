import React from "react";
import PhoneLoginPresenter from "./PhoneLoginPresenter";
import { RouteComponentProps } from "react-router-dom";

interface IState {
  countryCode: string;
  phoneNumber: string;
}
interface IProps extends RouteComponentProps<any> {}
class PhoneLoginContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  state = {
    countryCode: "+82",
    phoneNumber: ""
  };
  public render() {
    console.log(this.state);
    return (
      <PhoneLoginPresenter {...this.state} onInputChange={this.onInputChange} />
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
}

export default PhoneLoginContainer;

import React from 'react';
import { screen, render, } from "@testing-library/react";
import Button from "./Button";

it('should render the Button', function () {
    const { asFragment } = render(<Button title={'click me'} className={'btn-primary'} type={'submit'}/>);

    expect(asFragment()).toMatchSnapshot();
    screen.debug()
}); 
import React from 'react'
import MainTitle from "../../UI/MainTitle/MainTitle";
import HeaderForm from "../HeaderForm/HeaderForm";
import Container from "../Container/Container";

export default function HeaderContent() {
    return (
        <div style={{
            margin: '3rem auto 0 auto',
            width: '80%'
        }}>
            <MainTitle fontSize={'3rem'}>find your movie</MainTitle>
            <HeaderForm />
        </div>
    )
}
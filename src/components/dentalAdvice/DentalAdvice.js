import React, { useState } from 'react';
import { DivContainer, MainSection, TextContainer } from './styleAdvice';
import Image from 'next/image';
import banner from '../../../public/Assets/images/pic1.jpg';
import { useTranslation } from 'react-i18next';
import Input from '../../tools/input/Input';
import SecondlyBtn from '../../tools/secondlyBtn/SecondlyBtn';
import { TypeNumber, TypepersianNumber, validationName, validationPhone } from '../../tools/helper';
import { notify } from '../../tools/toast/toast';
import { CircularProgress } from '@mui/material';
import callApi from '../../api/callApi';
import { BASE_URL, SET_DENTAL_ADVICE } from '../../api/urls';
import { useSelector } from 'react-redux';
import KarmaPn from '../../tools/pn/KarmaPn'

const DentalAdvice = () => {

    const [phone, setPhone] = useState("");

    const [name, setName] = useState("");

    const [service, setService] = useState("");

    const [loader, setLoader] = useState(false);

    const lang = useSelector(state => state.stateLang.lng);

    const { t } = useTranslation();

    const phoneHandler = (e) => {
        if(e.target.value.length <= 11 ){
            setPhone(TypepersianNumber(e.target.value))
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const fetchinData = () => {
        if(window.localStorage.getItem("userToken") === null){
            notify(t("errToken"), "error")
        }else{
            if(validationName(name) || !validationPhone(phone) || validationName(service) ){
                notify(t("errForm"), "error")
            }else{
                setLoader(true);
                let token = JSON.parse(window.localStorage.getItem("userToken")).token;
                var raw = JSON.stringify({
                    name: name,
                    phonenumber: phone,
                    service: +!!service
                });

                const method ='POST';

                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                } 

                const fetcher = async () =>{
                    const data = await callApi(BASE_URL+SET_DENTAL_ADVICE, raw, headers, "POST");
                    console.log(data[0])
                    if(data[0].code === 200){
                        setLoader(false);
                        notify(t("successAdvice"), "success");
                        setPhone("");
                        setName("");
                        setService("");
                    }
                }

                fetcher();

            }
        }
    }

    return (
        <MainSection>
            <DivContainer lang={lang}>
                <TextContainer>
                    <h1>{t("dentalAdvice")}</h1>
                    <p>{t("lorem20")}</p>
                    <div className='input'>
                        <label>{t("name")}</label>
                        <Input 
                            type={"text"}
                            value={name}
                            change={nameHandler}
                            textError={t("errName")}
                            valiStatus={validationName(name)}
                        />
                    </div>
                    <div className='input'>
                        <label>{t("phone")}</label>
                        <Input 
                            type={"text"}
                            valiStatus={!validationPhone(phone)}
                            value={phone}
                            change={phoneHandler}
                            keyDown={(e)=> TypeNumber()}
                            textError={t("errorPhone")}
                        />
                    </div>
                    <div className='input'>
                        <label>{t("service")}</label>
                        <Input 
                            type={"text"}
                            value={service}
                            change={(e) => setService(e.target.value)}
                        />
                    </div>
                    <div className='btn'>
                        <SecondlyBtn
                             text={
                                loader ? <CircularProgress
                                    sx={{ width: "27px !important", height: "27px !important" }}
                                />: t("done")
                            }
                             onClick={fetchinData}
                        />
                    </div>

                    <KarmaPn/>
                </TextContainer>
                <div className='image'>
                    <Image src={banner} alt="banner" />
                </div>
            </DivContainer>
        </MainSection>
    );
};

export default DentalAdvice;
import Head from "next/head";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Service from "../../src/components/serivce/Service";
import DetailService from "../../src/components/serviceDetail/DetailService";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";
import { getOneService } from "../api/service/[serviceId]";

const ServicePage = ({ service }) => {

    
    const router = useRouter();
    const { serviceId } = router.query; 
    console.log(service);

    useEffect(()=> {
        service === "N" && router.push({pathname: "/service"});
    }, [service])
    
    return (
        <div>
            <Head>
                <title>Service</title>
                <meta name="description" content="Service page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header path={"Service"} />
            <main> 
                <DetailService id={serviceId} dataService={service} />
            </main>
        </div>
    );
};

export default ServicePage;

export async function getServerSideProps(context){
    const { query } = context;
    const data = await getOneService(query)
    return {
        props: {
            service: data[0],
        }
    };

}


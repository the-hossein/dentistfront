import React from 'react';
import { BasicSection } from '../../../styles/globalStyleComponents';
import { DivContainer, DivRow } from './styleD_S';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useTranslation } from 'react-i18next';
import AlbumSection from '../../tools/album/AlbomSection';
import { useSelector } from 'react-redux';


const DetailSection = ({ name,nameEn, description, descriptionEn, pic1, pic2, pic3 }) => {

    const lang = useSelector(state => state.stateLang.lng)

    const { t } = useTranslation();

    return (
        <BasicSection>
            <DivContainer lang={lang}>
                <h1 onClick={()=> window.history.back()}> <ArrowLeftIcon fontSize='large' /> {t("back")}</h1>
                <h2>{t("WSamples")}</h2>
                <DivRow border_button >
                    <div className='text'>
                        <h3 onClick={() => console.log(pic1)} >{lang === "fa" ? name : nameEn}</h3>
                        <p>{lang === "fa" ? description : descriptionEn}</p>
                    </div>
                    <div className='images'>
                        <AlbumSection reverse={true} lang={lang} pic1={pic1} pic2={pic2} pic3={pic3} />
                    </div>
                </DivRow>
            </DivContainer>
        </BasicSection>
    );
};

export default DetailSection;
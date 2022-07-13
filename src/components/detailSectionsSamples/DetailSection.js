import React from 'react';
import { BasicSection } from '../../../styles/globalStyleComponents';
import { DivContainer, DivRow } from './styleD_S';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useTranslation } from 'react-i18next';
import AlbumSection from '../../tools/album/AlbomSection';
import { useSelector } from 'react-redux';


const DetailSection = () => {

    const lang = useSelector(state => state.stateLang.lng)

    const { t } = useTranslation();

    return (
        <BasicSection>
            <DivContainer>
                <h1 onClick={()=> window.history.back()}> <ArrowLeftIcon fontSize='large' /> {t("back")}</h1>
                <h2>{t("WSamples")}</h2>
                <DivRow border_button >
                    <div className='text'>
                        <h3>{t("section")} 1</h3>
                        <p>{t("lorem40")}</p>
                    </div>
                    <div className='images'>
                        <AlbumSection reverse={true} lang={lang} />
                    </div>
                </DivRow>

                <DivRow reverse > 
                    <div className='text'>
                        <h3>{t("section")} 1</h3>
                        <p>{t("lorem40")}</p>
                    </div>
                    <div className='images'>
                        <AlbumSection reverse={false} lang={lang} />
                    </div>
                </DivRow>
            </DivContainer>
        </BasicSection>
    );
};

export default DetailSection;
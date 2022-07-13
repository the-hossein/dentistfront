import React from 'react';
import { BasicSection } from '../../../styles/globalStyleComponents';
import { DivContainer, DivRow } from './styleD_S';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useTranslation } from 'react-i18next';
import AlbumSection from '../../tools/album/AlbomSection';


const DetailSection = () => {

    const { t } = useTranslation()

    return (
        <BasicSection>
            <DivContainer>
                <h1 onClick={()=> window.history.back()}> <ArrowLeftIcon fontSize='large' /> Back</h1>
                <h2>Work Samples</h2>
                <DivRow border_button >
                    <div className='text'>
                        <h3>Section 1</h3>
                        <p>{t("lorem40")}</p>
                    </div>
                    <div className='images'>
                        <AlbumSection reverse={true} />
                    </div>
                </DivRow>

                <DivRow reverse > 
                    <div className='text'>
                        <h3>Section 1</h3>
                        <p>{t("lorem40")}</p>
                    </div>
                    <div className='images'>
                        <AlbumSection reverse={false} />
                    </div>
                </DivRow>
            </DivContainer>
        </BasicSection>
    );
};

export default DetailSection;
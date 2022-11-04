import React, { useContext } from "react";
import styled from "@emotion/styled";
import {
    star1, star2, start3, star4
  } from "../public/Elements";
import { AppContext } from "../Context";

    const WinPage = () => {

        const { again } = useContext(AppContext);

        const Container = styled.div`
        
            position: absolute;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(4px);
            z-index: 20;

        `

        const WinModalBox = styled.div`
        
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            Width: 621px;
            Height: 480px;
            border: 40px solid;
            border-radius: 40px;
            z-index: 20;

            border: 20px solid;

            border-image-source: linear-gradient(180deg, #67DF89 0%, rgba(141, 103, 223, 0) 100%);
            
            

            border: 20px solid transparent; 
            background: linear-gradient(180deg, #67DF89 0%,rgba(141, 103, 223, 0) 100%) border-box;             

        `

        const WinModalWhite = styled.div`
        
            width: 100%;
            height: 100%;
            background: white;
            border-radius: 40px;

            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            z-index: 30;

        `
        const Star1 = styled.div`
        
            position: absolute; 
            top: 0; 
            right: 0;
            transform: translate(50%, -50%);


        `

        const Star2 = styled.div`
        
            position: absolute;
            top: 0; 
            left: 0; 
            transform: translate(-50%, -20%)


        `

        const Star3 = styled.div`
        
            position: absolute;
            bottom: 0; 
            left: 0; 
            transform: translate(-50%, 40%)

        `

        const Star4 = styled.div`
        
            position: absolute;
            bottom: 0; 
            right: 0; 
            transform: translate(40%, 40%)

        `

        const ModalWinTextContainer = styled.div`
        
            position: absolute;
            top: 0%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: fit-content;
            height: fit-content;
        
        `

        const ModalWinText = styled.p`
        
            position: absolute;
            top: 0%;
            left: 50%;
            transform: translate(-50%, -50%);

            font-family: 'Arial';
            font-style: normal;
            font-weight: 700;
            font-size: 128px;
            line-height: 163px;
            display: flex;
            align-items: center;
            
            background: linear-gradient(180deg, #FFF9D8 1%, #FFE44F 100%);
            background-clip: text;
            text-fill-color: transparent;
            z-index: 29;
        
        `

        const ModalWinText1 = styled.p`

            position: absolute;
            top: 0%;
            left: 50%;
            transform: translate(-50%, -50%);

            font-family: 'Arial';
            font-style: normal;
            font-weight: 700;
            font-size: 128px;
            line-height: 163px;
            display: flex;
            align-items: center;
            
            text-color: transparent;
            text-shadow: rgba(18,150,64,0.9) 0px 0px 30px;
            blur: (5px);
            z-index: 28;
        
        `
        const ModalWinText2 = styled.p`

            position: absolute;
            top: 0%;
            left: 50%;
            transform: translate(-50%, -50%);

            font-family: 'Arial';
            font-style: normal;
            font-weight: 700;
            font-size: 128px;
            line-height: 163px;
            display: flex;
            align-items: center;
            
            text-color: transparent;
            text-shadow: rgba(18,150,64,0.9) 0px 0px 30px;
            blur: (10px)
            z-index: 27;
        
        `
        const ModalWinText3 = styled.p`

            position: absolute;
            top: 0%;
            left: 50%;
            transform: translate(-50%, -50%);

            font-family: 'Arial';
            font-style: normal;
            font-weight: 700;
            font-size: 128px;
            line-height: 163px;
            display: flex;
            align-items: center;
            
            text-color: transparent;
            text-shadow: rgba(18,150,64,0.9) 0px 0px 30px;
            blur: (15px)
            z-index: 26;
        
        `

        const AddText = styled.p`
            
            position: absolute;
            top: 46.54%;
            padding-left: 15px;
            padding-right: 15px;
            margin: 0;
            width: 100%;
            height: fit-content;
            
            font-family: 'Circe Rounded';
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 51px;
            display: flex;
            align-items: center;
            text-align: center;
            
            color: #5F40A1;
                

        `

        const Again = styled.button`
        
            position: absolute;
            left: 50%;
            bottom: 2%;
            transform: translate(-50%, -50%);

            width: 263px;
            height: 68px;
            border: none;

            display: flex;
            justify-content: center;
            align-items: center;

            font-family: 'Arial';
            font-style: normal;
            font-weight: 400;
            font-size: 40px;

            cursor: pointer;
            color: #FFFFFF;
            
            background: #2BD600;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 20px;

        `



        return (

            <Container>

                <WinModalBox> 

                    <Star1>{star1}</Star1>
                    <Star2>{start3}</Star2>
                    <Star3>{star2}</Star3>
                    <Star4>{star4}</Star4>

                    <WinModalWhite>

                        <ModalWinTextContainer>

                            <ModalWinText> Победа! </ModalWinText>
                            <ModalWinText1> Победа! </ModalWinText1>
                            <ModalWinText2> Победа! </ModalWinText2>
                            <ModalWinText3> Победа! </ModalWinText3>


                        </ModalWinTextContainer>

                        <AddText>  Молодец! Ты успешно справился с заданием! </AddText>

                        <Again onClick={again}> Заново </Again>

                    </WinModalWhite>

                </WinModalBox>

            </Container>

        )

    }

export default WinPage
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import styled from 'styled-components/native';

export default function StartScreen() {
  const router = useRouter();
  return (
    <BgGradient
      colors={['#f8faff', '#f3e8ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Container>
        <IllustrationContainer>
          <MainIllustration
            source={require('../assets/images/onboarding-main.png')}
            resizeMode="contain"
          />
          <ClockImage
            source={require('../assets/images/onboarding-clock.png')}
          />
          <CardsImage
            source={require('../assets/images/onboarding-cards.png')}
          />
          <VaseImage
            source={require('../assets/images/onboarding-vase.png')}
          />
          {/* Example: Add more small images here as needed */}
          {/* Dots for decoration */}
          <Dot style={{ top: 12, right: 32, backgroundColor: '#FFD6E8' }} />
          <Dot style={{ top: 60, left: 0, backgroundColor: '#B5E4FF' }} />
          <Dot style={{ bottom: 18, right: 60, backgroundColor: '#FFE7AA' }} />
          <Dot style={{ bottom: 0, left: 60, backgroundColor: '#C6F6D5' }} />
        </IllustrationContainer>
        <Title>Task Management &{"\n"}To-Do List</Title>
        <Description>
          This productive tool is designed to help you better manage your task project-wise conveniently!
        </Description>
        <StartButton onPress={() => router.replace('/(tabs)')}>
          <StartButtonText>Let's Start</StartButtonText>
          <MaterialIcons name="arrow-forward" size={22} color="#fff" style={{ marginLeft: 8 }} />
        </StartButton>
      </Container>
    </BgGradient>
  );
}

const BgGradient = styled(LinearGradient)`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px 16px 0 16px;
`;
const IllustrationContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 32px;
  position: relative;
  height: 350px;
`;
const MainIllustration = styled.Image`
  width: 220px;
  height: 350px;
  z-index: 2;
`;
const ClockImage = styled.Image`
  position: absolute;
  width: 20px;
  height: 25px;
  top: 0;
  left: 24px;
  z-index: 5;
`;
const CardsImage = styled.Image`
  position: absolute;
  width: 45px;
  height: 40px;
  top: 162px;
  right: 60px;
  z-index: 1;
`;
const VaseImage = styled.Image`
  position: absolute;
  width: 20px;
  height: 30px;
  bottom: 0;
  left: 16px;
  z-index: 5;
`;
const Dot = styled.View`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  opacity: 0.7;
`;
const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #222;
  text-align: center;
  margin-bottom: 16px;
`;
const Description = styled.Text`
  font-size: 14px;
  color: #888;
  text-align: center;
  margin-bottom: 32px;
`;
const StartButton = styled.TouchableOpacity`
  background: #7B61FF;
  border-radius: 16px;
  padding: 16px 0;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 8px;
`;
const StartButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`; 
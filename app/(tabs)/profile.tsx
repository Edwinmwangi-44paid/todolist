import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const calendarData = [
  ['blue', 'blue', 'yellow', 'blue', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
];

export default function ProfileScreen() {
  return (
    <ProfileContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeaderRow>
          <MaterialIcons name="chat-bubble-outline" size={22} color="#222" />
          <MaterialIcons name="settings" size={22} color="#222" />
        </ProfileHeaderRow>
        <AvatarCircle>
          <MaterialIcons name="person" size={48} color="#bbb" />
        </AvatarCircle>
        <WelcomeText>Welcome!</WelcomeText>
        <SubText>Sign up to track your progress</SubText>
        <SignUpButton>
          <SignUpButtonText>Sign Up</SignUpButtonText>
        </SignUpButton>
        <StatsRow>
          <StatBox>
            <StatLabel>--</StatLabel>
            <StatSubLabel>day streak</StatSubLabel>
          </StatBox>
          <StatBox>
            <StatLabel>--</StatLabel>
            <StatSubLabel>tasks completed</StatSubLabel>
          </StatBox>
        </StatsRow>
        <ExploreCardWrapper>
          <LinearGradient
            colors={["#7B61FF", "#4F8CFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 18, padding: 18 }}
          >
            <ExploreText>Explore more{"\n"}tips about Me+</ExploreText>
            <LearnMoreButton>
              <LearnMoreText>Learn more</LearnMoreText>
            </LearnMoreButton>
          </LinearGradient>
        </ExploreCardWrapper>
        <SectionRow>
          <SectionTitle>Tasks Stats</SectionTitle>
          <ViewAllButton>
            <ViewAllText>View All</ViewAllText>
          </ViewAllButton>
        </SectionRow>
        <CalendarCard>
          <CalendarHeaderRow>
            <MaterialIcons name="chevron-left" size={22} color="#222" />
            <CalendarMonth>Jun, 2025</CalendarMonth>
            <MaterialIcons name="chevron-right" size={22} color="#222" />
          </CalendarHeaderRow>
          <CalendarGrid>
            {daysOfWeek.map((d, i) => (
              <CalendarDayLabel key={`label-${d}-${i}`}>{d}</CalendarDayLabel>
            ))}
            {calendarData.map((week, rowIdx) =>
              week.map((status, colIdx) => (
                <CalendarDay key={`day-${rowIdx}-${colIdx}`}>
                  {status === 'blue' && <CalendarCircle color="#7eb6f7" />}
                  {status === 'yellow' && <CalendarCircle color="#ffd600" />}
                </CalendarDay>
              ))
            )}
          </CalendarGrid>
        </CalendarCard>
      </ScrollView>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.View`
  flex: 1;
  background: #fff;
`;
const ProfileHeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 20px 0 20px;
`;
const AvatarCircle = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: #f0f0f0;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: 24px 0 8px 0;
`;
const WelcomeText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  text-align: center;
`;
const SubText = styled.Text`
  font-size: 14px;
  color: #888;
  text-align: center;
  margin-bottom: 12px;
`;
const SignUpButton = styled.TouchableOpacity`
  background: #7B61FF;
  border-radius: 12px;
  padding: 12px 0;
  width: 120px;
  align-items: center;
  align-self: center;
  margin-bottom: 18px;
`;
const SignUpButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
const StatsRow = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 18px;
`;
const StatBox = styled.View`
  align-items: center;
  margin: 0 18px;
`;
const StatLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #222;
`;
const StatSubLabel = styled.Text`
  font-size: 13px;
  color: #888;
`;
const ExploreCardWrapper = styled.View`
  margin: 0 20px 18px 20px;
`;
const ExploreText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const LearnMoreButton = styled.TouchableOpacity`
  background: #fff;
  border-radius: 10px;
  padding: 8px 18px;
  align-self: flex-start;
`;
const LearnMoreText = styled.Text`
  color: #7B61FF;
  font-weight: bold;
  font-size: 14px;
`;
const SectionRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px 8px 20px;
`;
const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #222;
`;
const ViewAllButton = styled.TouchableOpacity``;
const ViewAllText = styled.Text`
  color: #7B61FF;
  font-size: 14px;
  font-weight: bold;
`;
const CalendarCard = styled.View`
  background: #fff;
  border-radius: 20px;
  margin: 0 0 24px 0;
  padding: 18px 12px 18px 12px;
`;
const CalendarHeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
const CalendarMonth = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #222;
  margin: 0 16px;
`;
const CalendarGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const CalendarDayLabel = styled.Text`
  width: 32px;
  text-align: center;
  color: #A1A1A1;
  font-size: 13px;
  margin-bottom: 4px;
`;
const CalendarDay = styled.View`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;
const CalendarCircle = styled.View<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: ${(p: { color: string }) => p.color};
`; 
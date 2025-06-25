import { Feather, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import styled from 'styled-components/native';

// Types
interface TaskGroup {
  id: string;
  name: string;
  tasks: number;
  progress: number; // 0-1
  color: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

interface InProgressTask {
  id: string;
  project: string;
  type: string;
  title: string;
  progress: number; // 0-1
  color: string;
}

// Mock Data
const user = {
  name: 'Edwin Mwangi',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
};

const inProgressTasks: InProgressTask[] = [
  {
    id: '1',
    project: 'Office Project',
    type: 'office',
    title: 'Grocery shopping app design',
    progress: 0.6,
    color: '#4F8CFF',
  },
  {
    id: '2',
    project: 'Personal Project',
    type: 'personal',
    title: 'Uber Eats redesign challange',
    progress: 0.3,
    color: '#FFB26B',
  },
];

const taskGroups: TaskGroup[] = [
  {
    id: '1',
    name: 'Office Project',
    tasks: 23,
    progress: 0.7,
    color: '#F7D1F7',
    icon: 'work',
  },
  {
    id: '2',
    name: 'Personal Project',
    tasks: 30,
    progress: 0.52,
    color: '#D1E8FF',
    icon: 'person',
  },
  {
    id: '3',
    name: 'Daily Study',
    tasks: 50,
    progress: 0.87,
    color: '#FFF2D1',
    icon: 'school',
  },
];

// Main HomeScreen
export default function HomeScreen() {
  const router = useRouter();
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSection>
          <Avatar source={{ uri: user.avatar }} />
          <HeaderTextContainer>
            <HelloText>Hello!</HelloText>
            <UserName>{user.name}</UserName>
          </HeaderTextContainer>
          <Feather name="bell" size={22} color="#A1A1A1" style={{ marginLeft: 'auto' }} />
        </HeaderSection>
        <ProgressCard>
          <LinearGradient
            colors={["#7B61FF", "#6241E9"]}
            style={{ borderRadius: 24, flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <ProgressCardContent>
              <ProgressCardTextGroup>
                <ProgressCardText>Your task is almost done!</ProgressCardText>
                <ViewTaskButton>
                  <ViewTaskButtonText>View Task</ViewTaskButtonText>
                </ViewTaskButton>
              </ProgressCardTextGroup>
              <ProgressCircle>
                <CircularProgress percent={85} size={48} strokeWidth={6} color="#fff" />
                <ProgressPercent>85%</ProgressPercent>
              </ProgressCircle>
            </ProgressCardContent>
          </LinearGradient>
        </ProgressCard>
        <SectionTitle>In Progress</SectionTitle>
        <InProgressScroll horizontal showsHorizontalScrollIndicator={false}>
          {inProgressTasks.map((task) => (
            <InProgressCard key={task.id} color={task.color}>
              <ProjectLabel>{task.project}</ProjectLabel>
              <InProgressTitle numberOfLines={2}>{task.title}</InProgressTitle>
              <ProgressBarContainer>
                <ProgressBar color={task.color} width={task.progress * 100} />
              </ProgressBarContainer>
            </InProgressCard>
          ))}
        </InProgressScroll>
        <SectionTitle>Task Groups</SectionTitle>
        <TaskGroupsContainer>
          {taskGroups.map((group) => (
            <TaskGroupCard key={group.id}>
              <TaskGroupIcon color={group.color}>
                <MaterialIcons name={group.icon} size={22} color="#fff" />
              </TaskGroupIcon>
              <TaskGroupInfo>
                <TaskGroupName>{group.name}</TaskGroupName>
                <TaskGroupTasks>{group.tasks} Tasks</TaskGroupTasks>
              </TaskGroupInfo>
              <TaskGroupProgress>
                <CircularProgress percent={Math.round(group.progress * 100)} size={36} strokeWidth={5} color="#7B61FF" />
              </TaskGroupProgress>
            </TaskGroupCard>
          ))}
        </TaskGroupsContainer>
      </ScrollView>
      <CustomTabBar>
        <TabBarButton onPress={() => router.replace('/(tabs)')}>
          <MaterialIcons name="home" size={24} color="#7B61FF" />
        </TabBarButton>
        <TabBarButton onPress={() => router.replace('/(tabs)/calendar')}>
          <MaterialIcons name="calendar-today" size={24} color="#A1A1A1" />
        </TabBarButton>
        <TabBarButton style={{ opacity: 0 }} />
        <TabBarButton onPress={() => router.replace('/(tabs)/stats')}>
          <MaterialIcons name="bar-chart" size={24} color="#A1A1A1" />
        </TabBarButton>
        <TabBarButton onPress={() => router.push('/(tabs)/profile')}>
          <MaterialIcons name="person" size={24} color="#A1A1A1" />
        </TabBarButton>
      </CustomTabBar>
      <FloatingActionButton
        onPress={() => router.replace('/(tabs)/add-project')}
        accessibilityLabel="Add Task"
        accessibilityRole="button"
      >
        <MaterialIcons name="add" size={32} color="#fff" />
      </FloatingActionButton>
    </Container>
  );
}

// Subcomponents
function CircularProgress({ percent, size, strokeWidth, color }: { percent: number; size: number; strokeWidth: number; color: string }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference * (1 - percent / 100);
  return (
    <Svg width={size} height={size}>
      <Circle
        stroke="#E6E6E6"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <Circle
        stroke={color}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference}, ${circumference}`}
        strokeDashoffset={progress}
        strokeLinecap="round"
      />
    </Svg>
  );
}

// Styled Components
const Container = styled.View`
  flex: 1;
  background: #f8f8ff;
`;
const HeaderSection = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 56px;
  margin-bottom: 18px;
  padding: 0 20px;
`;
const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 14px;
`;
const HeaderTextContainer = styled.View``;
const HelloText = styled.Text`
  color: #a1a1a1;
  font-size: 15px;
`;
const UserName = styled.Text`
  color: #222;
  font-size: 18px;
  font-weight: bold;
`;
const ProgressCard = styled.View`
  height: 170px;
  margin: 0 20px 24px 20px;
  border-radius: 24px;
  overflow: hidden;
`;
const ProgressCardContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
`;
const ProgressCardTextGroup = styled.View`
  flex: 1;
`;
const ProgressCardText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 10px;
`;
const ViewTaskButton = styled.Pressable`
  background: #fff;
  align-self: flex-start;
  margin-bottom: 16px;
  border-radius: 14px;
  padding: 10px 24px;
  align-items: center;
  elevation: 2;
`;
const ViewTaskButtonText = styled.Text`
  color: #7B61FF;
  font-weight: bold;
  font-size: 18px;
`;
const ProgressCircle = styled.View`
  align-items: center;
  justify-content: center;
  position: relative;
  width: 48px;
  height: 48px;
`;
const ProgressPercent = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  text-align-vertical: center;
  line-height: 48px;
`;
const SectionTitle = styled.Text`
  color: #222;
  font-size: 18px;
  font-weight: bold;
  margin: 0 20px 10px 20px;
`;
const InProgressScroll = styled.ScrollView`
  padding-left: 20px;
  margin-bottom: 18px;
`;
const InProgressCard = styled.View<{ color: string }>`
  background: #fff;
  border-radius: 16px;
  padding: 16px 18px;
  margin-right: 16px;
  width: 180px;
  shadow-color: #000;
  shadow-opacity: 0.06;
  shadow-radius: 8px;
  elevation: 2;
`;
const ProjectLabel = styled.Text`
  color: #a1a1a1;
  font-size: 13px;
  margin-bottom: 6px;
`;
const InProgressTitle = styled.Text`
  color: #222;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const ProgressBarContainer = styled.View`
  height: 6px;
  background: #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
`;
const ProgressBar = styled.View<{ color: string; width: number }>`
  height: 6px;
  background: ${(p: { color: string; width: number }) => p.color};
  width: ${(p: { color: string; width: number }) => p.width}%;
`;
const TaskGroupsContainer = styled.View`
  margin: 0 20px;
`;
const TaskGroupCard = styled.View`
  background: #fff;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  margin-bottom: 14px;
  shadow-color: #000;
  shadow-opacity: 0.06;
  shadow-radius: 8px;
  elevation: 2;
`;
const TaskGroupIcon = styled.View<{ color: string }>`
  background: ${(p: { color: string }) => p.color};
  width: 38px;
  height: 38px;
  border-radius: 19px;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;
const TaskGroupInfo = styled.View`
  flex: 1;
`;
const TaskGroupName = styled.Text`
  color: #222;
  font-size: 15px;
  font-weight: 500;
`;
const TaskGroupTasks = styled.Text`
  color: #a1a1a1;
  font-size: 13px;
`;
const TaskGroupProgress = styled.View`
  margin-left: 10px;
`;
const CustomTabBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0 24px;
  height: 64px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  shadow-color: #000;
  shadow-opacity: 0.06;
  shadow-radius: 8px;
  elevation: 8;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
const TabBarButton = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
const FloatingActionButton = styled.Pressable`
  position: absolute;
  left: 50%;
  bottom: 18px;
  transform: translate(-28px, 0);
  background: #7B61FF;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  elevation: 8;
  shadow-color: #000;
  shadow-opacity: 0.12;
  shadow-radius: 8px;
  z-index: 3;
`;
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const dates = [
  { day: 'Fri', date: 23 },
  { day: 'Sat', date: 24 },
  { day: 'Sun', date: 25, active: true },
  { day: 'Mon', date: 26 },
  { day: 'Tue', date: 27 },
];

const filters = ['All', 'To do', 'In Progress', 'Completed'];

const tasks = [
  {
    id: '1',
    project: 'Grocery shopping app design',
    title: 'Market Research',
    time: '10:00 AM',
    status: 'Done',
    statusColor: '#B794F4',
    timeColor: '#B794F4',
  },
  {
    id: '2',
    project: 'Grocery shopping app design',
    title: 'Competitive Analysis',
    time: '12:00 PM',
    status: 'In Progress',
    statusColor: '#FBBF24',
    timeColor: '#FBBF24',
  },
  {
    id: '3',
    project: 'Uber Eats redesign challenge',
    title: 'Create Low-fidelity Wireframe',
    time: '07:00 PM',
    status: 'To-do',
    statusColor: '#60A5FA',
    timeColor: '#60A5FA',
  },
  {
    id: '4',
    project: 'About design sprint',
    title: 'How to pitch a Design Sprint',
    time: '09:00 PM',
    status: 'To-do',
    statusColor: '#FBBF24',
    timeColor: '#FBBF24',
  },
];

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState(2);
  const [selectedFilter, setSelectedFilter] = useState(0);
  const router = useRouter();

  return (
    <Container>
      <Header>
        <IconButton>
          <MaterialIcons name="arrow-back-ios" size={20} color="#222" />
        </IconButton>
        <HeaderTitle>Today's Tasks</HeaderTitle>
        <IconButton>
          <MaterialIcons name="more-vert" size={22} color="#222" />
        </IconButton>
      </Header>
      <DateSelector horizontal showsHorizontalScrollIndicator={false}>
        {dates.map((d, i) => (
          <DateItem key={i} active={!!d.active} onPress={() => setSelectedDate(i)}>
            <DateText active={!!d.active}>{d.date}</DateText>
            <DayText active={!!d.active}>{d.day}</DayText>
          </DateItem>
        ))}
      </DateSelector>
      <FilterTabs horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((f, i) => (
          <FilterTab key={f} active={selectedFilter === i} onPress={() => setSelectedFilter(i)}>
            <FilterTabText active={selectedFilter === i}>{f}</FilterTabText>
          </FilterTab>
        ))}
      </FilterTabs>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCard>
            <TaskHeader>
              <ProjectText>{item.project}</ProjectText>
              <StatusBadge color={item.statusColor}>
                <StatusText color={item.statusColor}>{item.status}</StatusText>
              </StatusBadge>
            </TaskHeader>
            <TaskTitle>{item.title}</TaskTitle>
            <TaskFooter>
              <TimeText color={item.timeColor}>{item.time}</TimeText>
            </TaskFooter>
          </TaskCard>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
      <CustomTabBar>
        <TabBarButton onPress={() => router.replace('/(tabs)')}>
          <MaterialIcons name="home" size={24} color="#A1A1A1" />
        </TabBarButton>
        <TabBarButton onPress={() => router.replace('/(tabs)/calendar')} active>
          <MaterialIcons name="calendar-today" size={24} color="#7B61FF" />
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
      >
        <MaterialIcons name="add" size={32} color="#fff" />
      </FloatingActionButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: #f8f8ff;
  padding-bottom: 0;
`;
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 20px 0 20px;
`;
const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #222;
`;
const IconButton = styled.TouchableOpacity`
  padding: 8px;
`;
const DateSelector = styled.ScrollView`
  flex-direction: row;
  margin: 24px 0 8px 0;
  padding-left: 20px;
`;
const DateItem = styled.TouchableOpacity<{ active?: boolean }>`
  background: ${(p: { active?: boolean }) => (p.active ? '#7B61FF' : '#fff')};
  border-radius: 16px;
  padding: 12px 16px;
  margin-right: 12px;
  align-items: center;
  elevation: ${(p: { active?: boolean }) => (p.active ? 2 : 0)};
`;
const DateText = styled.Text<{ active?: boolean }>`
  color: ${(p: { active?: boolean }) => (p.active ? '#fff' : '#222')};
  font-size: 18px;
  font-weight: bold;
`;
const DayText = styled.Text<{ active?: boolean }>`
  color: ${(p: { active?: boolean }) => (p.active ? '#fff' : '#A1A1A1')};
  font-size: 13px;
`;
const FilterTabs = styled.ScrollView`
  flex-direction: row;
  margin-bottom: 16px;
  padding-left: 20px;
`;
const FilterTab = styled.TouchableOpacity<{ active?: boolean }>`
  background: ${(p: { active?: boolean }) => (p.active ? '#7B61FF' : '#f0f0f0')};
  border-radius: 16px;
  padding: 8px 18px;
  margin-right: 12px;
`;
const FilterTabText = styled.Text<{ active?: boolean }>`
  color: ${(p: { active?: boolean }) => (p.active ? '#fff' : '#7B61FF')};
  font-size: 15px;
  font-weight: bold;
`;
const TaskCard = styled.View`
  background: #fff;
  border-radius: 16px;
  margin: 0 20px 14px 20px;
  padding: 16px 18px;
  shadow-color: #000;
  shadow-opacity: 0.06;
  shadow-radius: 8px;
  elevation: 2;
`;
const TaskHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ProjectText = styled.Text`
  color: #a1a1a1;
  font-size: 13px;
`;
const StatusBadge = styled.View<{ color: string }>`
  background: ${(p: { color: string }) => p.color}22;
  border-radius: 8px;
  padding: 2px 10px;
`;
const StatusText = styled.Text<{ color: string }>`
  color: ${(p: { color: string }) => p.color};
  font-size: 12px;
  font-weight: bold;
`;
const TaskTitle = styled.Text`
  color: #222;
  font-size: 15px;
  font-weight: 500;
  margin: 8px 0 0 0;
`;
const TaskFooter = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
const TimeText = styled.Text<{ color: string }>`
  color: ${(p: { color: string }) => p.color};
  font-size: 14px;
  font-weight: bold;
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
const TabBarButton = styled.TouchableOpacity<{ active?: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: ${(p: { active?: boolean }) => (p.active ? 1 : 0.7)};
`;
const FloatingActionButton = styled.TouchableOpacity`
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
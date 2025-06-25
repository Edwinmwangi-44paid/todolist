import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const month = 'Jun, 2025';
const year = '2025';
const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const calendarData = [
  // 5 weeks, 7 days each
  ['blue', 'blue', 'yellow', 'blue', '', '', ''],
  ['yellow', 'yellow', 'blue', 'yellow', 'blue', 'yellow', 'yellow'],
  ['blue', 'yellow', 'yellow', 'blue', 'yellow', 'blue', 'yellow'],
  ['blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow', ''],
  ['', '', '', '', '', '', ''],
];
const recordStats = [
  { label: 'Perfect Days', value: '48', unit: 'days' },
  { label: 'Best Streaks', value: '5', unit: 'days' },
  { label: 'Total Tasks Completed', value: '331' },
  { label: 'Tasks Completed This Month', value: '44' },
  { label: 'Overall Rate', value: '37', unit: '%' },
  { label: 'Monthly Rate', value: '29', unit: '%' },
];

export default function StatsScreen() {
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);
  const router = useRouter();
  return (
    <StatsContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderRow>
          <BackButton onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios" size={22} color="#222" />
          </BackButton>
          <HeaderTitle>All Tasks</HeaderTitle>
          <DropdownButton>
            <HeaderDropdownText>All Tasks</HeaderDropdownText>
            <MaterialIcons name="arrow-drop-down" size={22} color="#222" />
          </DropdownButton>
        </HeaderRow>
        <SectionTitle>This month&apos;s data</SectionTitle>
        <CalendarCard>
          <CalendarHeaderRow>
            <MaterialIcons name="chevron-left" size={22} color="#222" />
            <CalendarMonth>{selectedMonth}</CalendarMonth>
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
        <SectionTitle>This year&apos;s data</SectionTitle>
        <YearCard>
          <YearHeaderRow>
            <MaterialIcons name="chevron-left" size={22} color="#222" />
            <YearText>{selectedYear}</YearText>
            <MaterialIcons name="chevron-right" size={22} color="#222" />
          </YearHeaderRow>
          <HeatmapRow>
            {/* Render 52 weeks x 7 days = 364 squares, mock data for now */}
            {[...Array(52 * 7)].map((_, i) => (
              <HeatmapSquare key={`heatmap-${i}`} active={i % 13 === 0} />
            ))}
          </HeatmapRow>
        </YearCard>
        <SectionTitle>Record</SectionTitle>
        <RecordCard>
          {recordStats.map((stat) => (
            <RecordRow key={stat.label}>
              <RecordLabel>{stat.label}</RecordLabel>
              <RecordValue>
                {stat.value}
                {stat.unit && <RecordUnit> {stat.unit}</RecordUnit>}
              </RecordValue>
            </RecordRow>
          ))}
        </RecordCard>
      </ScrollView>
    </StatsContainer>
  );
}

const StatsContainer = styled.View`
  flex: 1;
  background: #f8f8ff;
`;
const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 20px 0 20px;
`;
const BackButton = styled.TouchableOpacity`
  padding: 8px;
`;
const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #222;
`;
const DropdownButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const HeaderDropdownText = styled.Text`
  font-size: 16px;
  color: #222;
  margin-right: 2px;
`;
const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #222;
  margin: 24px 0 12px 20px;
`;
const CalendarCard = styled.View`
  background: #fff;
  border-radius: 20px;
  margin: 0 16px 24px 16px;
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
const YearCard = styled.View`
  background: #fff;
  border-radius: 20px;
  margin: 0 16px 24px 16px;
  padding: 18px 12px 18px 12px;
`;
const YearHeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
const YearText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #222;
  margin: 0 16px;
`;
const HeatmapRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
const HeatmapSquare = styled.View<{ active?: boolean }>`
  width: 6px;
  height: 6px;
  margin: 1px;
  border-radius: 2px;
  background: ${(p: { active?: boolean }) => (p.active ? '#a78bfa' : '#ede9fe')};
`;
const RecordCard = styled.View`
  background: #fff;
  border-radius: 20px;
  margin: 0 16px 24px 16px;
  padding: 18px 12px 18px 12px;
`;
const RecordRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const RecordLabel = styled.Text`
  color: #222;
  font-size: 15px;
`;
const RecordValue = styled.Text`
  color: #222;
  font-size: 18px;
  font-weight: bold;
`;
const RecordUnit = styled.Text`
  color: #222;
  font-size: 13px;
  font-weight: normal;
`;
const CalendarCircle = styled.View<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: ${(p: { color: string }) => p.color};
`; 
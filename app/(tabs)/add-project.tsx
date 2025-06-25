import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const taskGroups = [
  { label: 'Work', value: 'work', color: '#F7D1F7', icon: require('../../assets/images/profile.png') },
  { label: 'Personal', value: 'personal', color: '#D1E8FF' },
];

export default function AddProjectScreen() {
  const router = useRouter();
  const [selectedGroup, setSelectedGroup] = useState(taskGroups[0]);
  const [projectName, setProjectName] = useState('Grocery Shopping App');
  const [description, setDescription] = useState('This application is designed for super shops. By using this application they can enlist all their products in one place and can deliver. Customers will get a one-stop solution for their daily shopping.');
  const [startDate, setStartDate] = useState('01 May, 2022');
  const [endDate, setEndDate] = useState('30 June, 2022');

  return (
    <Container>
      <Header>
        <IconButton onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#222" />
        </IconButton>
        <HeaderTitle>Add Project</HeaderTitle>
        <IconButton>
          <MaterialIcons name="notifications-none" size={22} color="#222" />
        </IconButton>
      </Header>
      <FormScroll contentContainerStyle={{ paddingBottom: 32 }} showsVerticalScrollIndicator={false}>
        <FieldCard>
          <FieldLabel>Task Group</FieldLabel>
          <DropdownButton>
            <GroupIcon style={{ backgroundColor: selectedGroup.color }}>
              {selectedGroup.icon && (
                <Image source={selectedGroup.icon} style={{ width: 20, height: 20 }} />
              )}
            </GroupIcon>
            <GroupLabel>{selectedGroup.label}</GroupLabel>
            <MaterialIcons name="arrow-drop-down" size={24} color="#A1A1A1" style={{ marginLeft: 'auto' }} />
          </DropdownButton>
        </FieldCard>
        <FieldCard>
          <FieldLabel>Project Name</FieldLabel>
          <StyledInput value={projectName} onChangeText={setProjectName} />
        </FieldCard>
        <FieldCard>
          <FieldLabel>Description</FieldLabel>
          <StyledTextarea
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </FieldCard>
        <FieldCard>
          <FieldLabel>Start Date</FieldLabel>
          <DateRow>
            <Image source={require('../../assets/images/calendar.png')} style={{ width: 20, height: 20, marginRight: 8 }} />
            <DateText>{startDate}</DateText>
            <MaterialIcons name="arrow-drop-down" size={24} color="#A1A1A1" style={{ marginLeft: 'auto' }} />
          </DateRow>
        </FieldCard>
        <FieldCard>
          <FieldLabel>End Date</FieldLabel>
          <DateRow>
            <Image source={require('../../assets/images/calendar.png')} style={{ width: 20, height: 20, marginRight: 8 }} />
            <DateText>{endDate}</DateText>
            <MaterialIcons name="arrow-drop-down" size={24} color="#A1A1A1" style={{ marginLeft: 'auto' }} />
          </DateRow>
        </FieldCard>
        <ProjectLogoCard>
          <ProjectLogoCircle>
            <Image source={require('../../assets/images/grocery-logo.png')} style={{ width: 44, height: 44, borderRadius: 22 }} />
          </ProjectLogoCircle>
          <ProjectNameContainer>
            <ProjectNameRow>
              <ProjectNameGreen>Grocery</ProjectNameGreen>
            </ProjectNameRow>
            <ProjectNameRow>
              <ProjectNameOrange>shop</ProjectNameOrange>
            </ProjectNameRow>
          </ProjectNameContainer>
          <ChangeLogoButton2>
            <ChangeLogoText2>Change Logo</ChangeLogoText2>
          </ChangeLogoButton2>
        </ProjectLogoCard>
        <AddButton>
          <AddButtonText>Add Project</AddButtonText>
        </AddButton>
      </FormScroll>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 24px;
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
const FormScroll = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;
const FieldCard = styled.View`
  background: #f8f8ff;
  border-radius: 16px;
  margin-bottom: 18px;
  padding: 12px 16px;
`;
const FieldLabel = styled.Text`
  color: #a1a1a1;
  font-size: 13px;
  margin-bottom: 6px;
`;
const DropdownButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 10px 12px;
`;
const GroupIcon = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const GroupLabel = styled.Text`
  color: #222;
  font-size: 15px;
  font-weight: 500;
`;
const StyledInput = styled.TextInput`
  background: #fff;
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 15px;
  color: #222;
`;
const StyledTextarea = styled.TextInput`
  background: #fff;
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 15px;
  color: #222;
  min-height: 80px;
`;
const DateRow = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 10px 12px;
`;
const DateText = styled.Text`
  color: #222;
  font-size: 15px;
  margin-left: 10px;
`;
const AddButton = styled.TouchableOpacity`
  background: #7B61FF;
  border-radius: 14px;
  padding: 18px 0;
  align-items: center;
  margin-top: 12px;
`;
const AddButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
const ProjectLogoCard = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 16px;
  margin-bottom: 18px;
  padding: 12px 16px;
  justify-content: space-between;
`;
const ProjectLogoCircle = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: #1abc9c;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;
const ProjectNameContainer = styled.View`
  flex: 1;
`;
const ProjectNameRow = styled.View``;
const ProjectNameGreen = styled.Text`
  color: #1abc9c;
  font-size: 16px;
  font-weight: bold;
`;
const ProjectNameOrange = styled.Text`
  color: #ff7043;
  font-size: 16px;
  font-weight: bold;
`;
const ChangeLogoButton2 = styled.TouchableOpacity`
  background: #ede9fe;
  border-radius: 8px;
  padding: 8px 16px;
`;
const ChangeLogoText2 = styled.Text`
  color: #7B61FF;
  font-weight: bold;
  font-size: 14px;
`; 
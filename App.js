import React, { Component } from 'react';

import { 
	StyleSheet,
	Text, 
	View, 
	Image, 
	ScrollView, 
	Button, 
	Platform, 
	Dimensions,
} from 'react-native';

import {
	TabNavigator,
	DrawerNavigator,
	DrawerItems,
} from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';
import { Card, Avatar, Icon, Header, SearchBar, Divider, List, ListItem  } from 'react-native-elements';

import { TagCloud } from 'react-native-tag-cloud';

const deviceWidth = Dimensions.get('window').width;

/* 
 * Styles 
 */
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
  tagCloudContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
	avatarList: { 
		paddingHorizontal: 15,
		marginRight: 5,
		justifyContent: 'center', 
		alignItems: 'center',
	},
  titleBar: {
    marginTop: 30, 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flexDirection:'row' 
  }
});

const SettingsIcon = (props) => (
    <Icon
      style={{ top: 5 }}
      name='md-settings'
      type='ionicon'
      color='skyblue'
			onPress={() => props.navigation.navigate('DrawerOpen')}
   />
  ) 

class NavScreen extends Component {

	componentDidMount = () => {
		console.log(`${this.props.banner} mount`);
	};

	componentWillUnmount = ()=>{
		console.log(`${this.props.banner} unmount`);
	}

	authenticate = () => {
		console.log('Hey');
	}

	render() {
		const { navigation, banner } = this.props;
const list = [
  {
    title: 'Tarefa pendente 1',
    icon: 'av-timer'
  },
  {
    title: 'Tarefa pemdente 2',
    icon: 'av-timer'
  },
]

const list2 = [
  {
    title: 'Turma exemplo A1',
    icon: 'group'
  },
  {
    title: 'Turma exemplo 2',
    icon: 'group'
  },
]
		return (
<View>
    <View style={{ height: 70 }}>
      <Header
        centerComponent={{ text: banner }} 
        rightComponent={ <SettingsIcon navigation={navigation} /> }
      />
</View>
			<ScrollView>
<Card style={{ marginTop: 10 }} title="Tarefas pendentes">
<List>
  {
    list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        leftIcon={{name: item.icon}}
      />
    ))
  }
</List>
</Card>

<Card title="Minhas turmas">
<List>
  {
    list2.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        leftIcon={{name: item.icon}}
      />
    ))
  }
</List>
</Card>


			</ScrollView>
</View>
		);
	}
}




const StudentScreen = ({ navigation }) => (
	<NavScreen banner={'Quadro resumo do Aluno'} navigation={navigation} />
);

StudentScreen.navigationOptions = {
	drawerLabel: 'Aluno',
};

const TeacherScreen = ({ navigation }) => (
	<NavScreen banner="Quadro resumo do Professor" navigation={navigation} />
);

const SettingsScreen = ({ navigation }) => (
	<NavScreen banner="Configurações" navigation={navigation} />
);

class SearchScreen extends Component {

constructor(props) {
    super(props);

    this.state = {
      tagList: [
        { title: 'Algebra', point: 0 },
        { title: 'Trigonometria', point: 3 },
        { title: 'Diferenciação', point: 2 },
        { title: 'Javascript', point: 1 },
        { title: 'Python', point: 1 },
        { title: 'Revolução Francesa', point: 0 },
        { title: 'Inequações', point: 2 },
        { title: 'Mecânica Clássica', point: 4 },
        { title: 'Logaritmos', point: 1 },
        { title: 'C++', point: 2 },
      ],
      colorList: ['#42A5F5', '#64B5F6', '#90CAF9', '#BBDEFB', '#E3F2FD'],
      minFontSize: 12,
      style: {
        width: deviceWidth / 1,
        paddingLeft: 5,
        paddingRight: 5,
      }
  }
};

	componentDidMount = () => {
	};

	componentWillUnmount = ()=>{
	};

	render() {
		const { navigation, banner } = this.props;
		return (
    <View style={{ flex: 1 }}>
<View style={{ height: 80 }}>
      <Header
        centerComponent={{ text: 'Procurar'}} 
        rightComponent={ <SettingsIcon navigation={navigation} /> }
      />
</View>
        <SearchBar
          placeholder='Digite aqui...' />
        <View>

        <TagCloud
            tagList={this.state.tagList}
            colorList={this.state.colorList}
            minFontSize={this.state.minFontSize}
            style={this.state.style}
          />
        </View>
    </View>
		);
	}
};

const BookmarksScreen = ({ navigation }) => (
<View>
<Card title='Favoritos'></Card>
</View>
);

const ProfileScreen = ({ navigation }) => (
<View>
<Card title='Perfil'></Card>
</View>
);


const AboutScreen= ({ navigation }) => (
	<View style={{ flex: 1, justifyContent: 'space-between'}}>

		<View style={{ marginTop: 20, marginBottom: 0, flex: .05 }} > 
      <Ionicons name="md-arrow-back" size={24}
			onPress={() => navigation.navigate('Aluno')} />
    </View>

		<View style={{ flex: .35 }} > 
			<Image 
				style={{ flex: 1, height: null, width: null }} 
				resizeMode='contain'
				source={require('./assets/turma-mpntde.jpg')} /> 
		</View>

		<View style={{ 
      flex: .10, 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
			<Text 
        style={{ 
          flex: 1, 
          margin: 5, 
          fontWeight: 'bold', 
          textAlign: 'center' }} >
				MESTRADO PROFISSIONAL EM NOVAS TECNOLOGIAS DIGITAIS NA EDUCAÇÃO
			</Text>
		</View>

		<Image 
			style={{ margin: 5, flex: .20, width: 200, alignSelf: 'center'}} 
			resizeMode='contain' 
			source={require('./assets/khan-remixed-logo.png')} /> 

		<View style={{ margin: 5, flex: .20, alignItems: 'center' }} >
			<Text style={{ fontWeight: 'bold', textAlign: 'center' }} >
				Projeto Final em LCVA
			</Text>
			<Text style={{ fontWeight: 'bold', textAlign: 'center' }} >
				Profª. Bianca Martins	
			</Text>
			<View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
				<View style={ styles.avatarList }>
					<Avatar medium rounded source={require('./assets/cesar.jpeg')} />
					<Text>César</Text>
				</View>
				<View style={ styles.avatarList }>
					<Avatar medium rounded source={require('./assets/danielle.jpeg')} />
					<Text>Danielle</Text>
				</View>
				<View style={ styles.avatarList }>
					<Avatar medium rounded source={require('./assets/sabrina.jpeg')} />
					<Text>Sabrina</Text>
				</View>
			</View>
		</View>

	</View>
);

/*
/* TabNavStudent
*/

const TabNavStudent = TabNavigator(
	{
		MainTab: {
      showIcon: true,
			screen: StudentScreen,
			path: '/',
			navigationOptions: {
				title: 'LCVA - Projeto final',
				tabBarLabel: 'Home',
        showIcon: 'true',
				tabBarIcon : <Ionicons name="md-home" size={24} />
			},
		},
		SearchTab: {
			screen: SearchScreen,
			path: '/explore',
			navigationOptions: {
        showIcon: true,
				title: 'Explorar',
				tabBarLabel: 'Explorar',
				tabBarIcon : <Ionicons name="md-search" size={24} />
			},
		},
		BookmarksTab: {
			screen: BookmarksScreen,
			path: '/bookmarks',
			navigationOptions: {
				title: 'Favoritos',
				tabBarLabel: 'Favoritos',
				tabBarIcon : <Ionicons name="md-bookmark" size={24} />
			},
		},
		ProfileTab: {
			screen: ProfileScreen,
			path: '/profile',
			navigationOptions: {
				title: 'Perfil',
				tabBarIcon : <Ionicons name="md-person" size={24} />
			},
		},
	},
	{
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
    tabBarOptions: { showIcon: true },
    showLabel: true,
	}
);

TabNavStudent.navigationOptions = {
	drawerLabel: 'Aluno',
};

/*
 TabNavTeacher
*/

const TabNavTeacher = TabNavigator(
	{
		MainTab: {
      showIcon: true,
			screen: TeacherScreen,
			path: '/',
			navigationOptions: {
				title: 'LCVA - Projeto final',
				tabBarLabel: 'Home',
				tabBarIcon : <Ionicons name="md-home" size={24} />
			},
		},
		SearchTab: {
			screen: SearchScreen,
			path: '/explore',
			navigationOptions: {
        showIcon: true,
				title: 'Explorar',
				tabBarLabel: 'Explorar',
				tabBarIcon : <Ionicons name="md-search" size={24} />
			},
		},
		BookmarksTab: {
			screen: BookmarksScreen,
			path: '/bookmarks',
			navigationOptions: {
				title: 'Favoritos',
				tabBarLabel: 'Favoritos',
				tabBarIcon : <Ionicons name="md-bookmark" size={24} />
			},
		},
		ProfileTab: {
			screen: ProfileScreen,
			path: '/profile',
			navigationOptions: {
				title: 'Perfil',
				tabBarIcon : <Ionicons name="md-person" size={24} />
			},
		},


	},
	{
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
    showLabel: true,
    tabBarOptions: { showIcon: true },
	}
);

TabNavTeacher.navigationOptions = {
	drawerLabel: 'Professor',
};



const CustomDrawerContentComponent = (props) => (
	<View>
		<View style={{ alignItems: 'center', paddingTop: 30 }}>
			<Image source={require('./assets/khan-remixed-logo.png')} /> 
		</View>
		<DrawerItems {...props} />
	</View>
);

const DrawerExample = DrawerNavigator(
	{
		Aluno: {
			path: '/homeStudent',
			screen: TabNavStudent,
		},
		Professor: {
			path: '/homeTeacher',
			screen: TabNavTeacher,
		},
		Sobre: {
      drawerLabel: 'Sobre este aplicativo',
			path: '/about',
			screen: AboutScreen,
		},

	},
	{
		initialRouteName: 'Aluno',
		contentOptions: {
			activeTintColor: '#e91e63',
		},
		drawerWidth: Dimensions.get('window').width - (Platform.OS === 'android' ? 56 : 64),
    drawerPosition: 'right',
		contentComponent: CustomDrawerContentComponent,
	}
);

export default DrawerExample;


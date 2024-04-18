import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import TextSettings from '../screens/Font';
import DisplaySettings from '../screens/Display';

import { useThemeColors } from '../hooks/useThemeColors';

const TabBarIcon = ({ color, size, name }) => (
  <Ionicons name={name} size={size} color={color} />
);

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { colors } = useThemeColors();

  return (
    <Tab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        tabBarInactiveTintColor: colors.textMidContrast,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      {/* Home Screen */}
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: (props) => (
            <TabBarIcon name='book-outline' {...props} />
          ),
          headerShown: false,
        }}
      />
      {/* Font Settings */}
      <Tab.Screen
        name='Font'
        component={TextSettings}
        options={{
          title: 'Font',
          tabBarIcon: (props) => (
            <TabBarIcon name='leaf-outline' {...props} />
          ),
          headerShown: false,
        }}
      />
      {/* Light Display Settings */}
      <Tab.Screen
        name='Display'
        component={DisplaySettings}
        options={{
          title: 'Display',
          tabBarIcon: (props) => (
            <TabBarIcon name='flashlight-outline' {...props} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
//ClockScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity  } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import Sun from '../components/svgr/Sun';
import Moon from '../components/svgr/Moon';
import ArrowUp from '../components/svgr/ArrowUp';

const bgImageDay = require('../../assets/bg-image-daytime.jpg');
const bgImageNight = require('../../assets/bg-image-nighttime.jpg');

const ClockScreen = () => {
  const [time, setTime] = useState(null);
  const [amPm, setAmPm] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [location, setLocation] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(bgImageDay);
  const [greeting, setGreeting] = useState("");
  const [daynight, setDayNight] = useState(null);
  //Expand Section
  const [expanded, setExpanded] = useState(false);
  const [timezoneName, setTimezoneName] = useState(null);
  const [dayOfYear, setDayOfYear] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [weekNumber, setWeekNumber] = useState(null);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    const fetchCurrentTimeAndLocation = async () => {
      try {
        const response = await axios.get('http://worldtimeapi.org/api/ip');
        const data = response.data;
        const currentTime = moment(data.datetime);
        const hour = currentTime.hours();
        
        setTimezoneName(data.timezone);
        setDayOfYear(currentTime.dayOfYear());
        setDayOfWeek(currentTime.day());
        setWeekNumber(currentTime.week());

        if(hour >= 5 && hour < 12) {
          setGreeting("GOOD MORNING, IT'S CURRENTLY");
          setDayNight(<Sun />);
        } else if(hour >= 12 && hour < 18) {
          setGreeting("GOOD AFTERNOON, IT'S CURRENTLY");
          setDayNight(<Sun />);
        } else {
          setGreeting("GOOD EVENING, IT'S CURRENTLY");
          setDayNight(<Moon />);
        }

        setTime(currentTime.format('HH:mm'));
        setAmPm(currentTime.format('A'));
        setTimezone(data.abbreviation);
    
        const locationResponse = await axios.get(`http://ip-api.com/json/${data.client_ip}`);
        const locationData = locationResponse.data;
        const location = `IN ${locationData.city.toUpperCase()}, ${locationData.region.toUpperCase()}`;
    
        setLocation(location);
        setBackgroundImage(hour >= 5 && hour < 18 ? bgImageDay : bgImageNight);
      } catch (error) {
        console.log('Error fetching current time and location:', error);
      }
    };    

    fetchCurrentTimeAndLocation();
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.timeAndLocationContainer}>
        <View style={styles.greetingContainer}>
          {daynight}
          <Text style={styles.greetingText}>{greeting}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{time}</Text>
          <View style={styles.amPmTimezoneContainer}>
            <Text style={styles.amPmText}>{amPm}</Text>
            <Text style={styles.timezoneText}>{timezone}</Text>
          </View>
        </View>
        <Text style={styles.locationText}>{location}</Text>
        <TouchableOpacity style={[styles.expandButton, expanded ? styles.expandButtonExpanded : styles.expandButtonCollapsed]} onPress={toggleExpanded}>
          <Text>{expanded ? 'LESS' : 'MORE'}{expanded ? <ArrowUp style={{ transform: [{ rotate: '180deg' }] }}/> : <ArrowUp />}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.extraInfoContainer}>
            <Text style={styles.extraInfoText}>Timezone: {timezoneName}</Text>
            <Text style={styles.extraInfoText}>Day of the year: {dayOfYear}</Text>
            <Text style={styles.extraInfoText}>Day of the week: {dayOfWeek}</Text>
            <Text style={styles.extraInfoText}>Week number: {weekNumber}</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingContainer: {
    position: 'absolute',
    paddingLeft: 10,
    width: 1000,
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#fff",
  },
  timeAndLocationContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: "#fff"
  },
  amPmTimezoneContainer: {
    marginLeft: 10,
    position: 'relative',
    paddingTop: 40,
  },
  amPmText: {
    fontSize: 10,
    color: "#fff"
  },
  timezoneText: {
    fontSize: 10,
    color: "#fff"
  },
  locationText: {
    fontSize: 24,
    color: "#fff",
  },
  extraInfoContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  //Expand Section
  expandButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 30,
    borderStyle: 'dashed',
    backgroundColor: '#fff', 
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#fff',
    marginLeft: 5,
  },
  expandButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },
  expandButtonCollapsed: {
    borderStyle: 'solid',
    backgroundColor: '#fff',
  },
  expandButtonExpanded: {
    borderStyle: 'dashed',
    backgroundColor: '#fff',
  },
  toggleButtonText: {
    marginRight: 5,
    color: '#000',
  },
  arrowIcon: {
    alignSelf: 'center',
  },
  extraInfoContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  extraInfoContainerDay: {
    backgroundColor: '#fff',
  },
  extraInfoContainerNight: {
    backgroundColor: '#000',
  },
  extraInfoText: {
    color: '#000',
  },
});

export default ClockScreen;
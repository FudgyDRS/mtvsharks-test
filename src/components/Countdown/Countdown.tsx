import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./countdown.scss";

const futureDate = new Date(1648224000000);
const getDateDiff = (date1: Date, date2: Date) => {
  const diff = new Date(date2.getTime() - date1.getTime());
  return {
    year:     diff.getUTCFullYear() - 1970,
    month:    diff.getUTCMonth(),
    day:      diff.getUTCDate() - 1,
    hour:     diff.getUTCHours(),
    minute:   diff.getUTCMinutes(),
    second:   diff.getUTCSeconds()
  };
};

export default function Countdown() {
  const [diff, setDiff] = useState({ year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setDiff(getDateDiff(new Date(), futureDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-box">
      <div className="countdown">
        <Text className="countdown-title">Time Until Launch (4PM UTC)</Text>
        <div className="countdown-time">
            <Text className="countdown-time-num">{diff.day}   </Text><Text className="countdown-time-text"> DAYS </Text>
            <Text className="countdown-time-num">{diff.hour}  </Text><Text className="countdown-time-text"> HRS </Text>
            <Text className="countdown-time-num">{diff.minute}</Text><Text className="countdown-time-text"> MINS </Text>
            <Text className="countdown-time-num">{diff.second}</Text><Text className="countdown-time-text"> SECS </Text>
        </div>
      </div>
    </div>
  );
}

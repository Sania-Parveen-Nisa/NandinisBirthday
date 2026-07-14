// import React ,{useState,useEffect}from 'react'
// 
// 
const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(()=>{
    setTimeout(()=>{
      setTime(time - 1000);
    },1000)
  },[time])
// 
  // const Timer = () => {
  // const targetDate = new Date("2028-10-14T00:00:00").getTime();
// 
  // const getRemainingTime = () => {
    // const now = new Date().getTime();
    // return Math.max(targetDate - now, 0);
  // };
// 
  // const [time, setTime] = useState(getRemainingTime());
// 
  // useEffect(() => {
    // const interval = setInterval(() => {
      // setTime(getRemainingTime());
    // }, 1000);
// 
    // return () => clearInterval(interval);
  // }, []);
// 
// 
// const getFormattedTime = (miliSeconds)=>{
  // let total_seconds = parseInt(Math.floor(miliSeconds / 1000));
  // let total_minutes = parseInt(Math.floor(total_seconds / 60));
  // let total_hours = parseInt(Math.floor(total_minutes / 60));
  // let days = parseInt(Math.floor(total_hours / 24));
// 
  // let seconds = parseInt(total_seconds % 60);
  // let minutes = parseInt(total_minutes % 60);
  // let hours = parseInt(total_hours % 24);
// 
  return `${days}: ${hours}: ${minutes}: ${seconds}`
  // return {days , hours , minutes , seconds}
// 
// }
// 
// const {days , hours , minutes , seconds} = getFormattedTime(time);
// 
  // return (
    // <div  className="text-center">
      <div className="">
      {getFormattedTime(time)} 
{/*  */}
      </div>
{/*  */}
{/*  */}
      <div className="flex justify-center gap-2 mt-1 font-['Cinzel'] text-xs uppercase">
      <span>Days</span>
      <span>Hours</span>
      <span>Minutes</span>
      <span>Seconds</span>
    </div>
{/*  */}
{/*  */}
    {/* <div className="flex justify-center items-start gap-3 sm:gap-5 md:gap-8 font-['Cinzel']"> */}
  {/* <div className="flex flex-col items-center"> */}
    {/* <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900"> */}
      {/* {String(days).padStart(2, "0")} */}
    {/* </span> */}
    {/* <span className="mt-2 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest"> */}
      {/* Days */}
    {/* </span> */}
  {/* </div> */}
{/*  */}
  {/* <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900"> */}
    {/* : */}
  {/* </span> */}
{/*  */}
  {/* <div className="flex flex-col items-center"> */}
    {/* <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900"> */}
      {/* {String(hours).padStart(2, "0")} */}
    {/* </span> */}
    {/* <span className="mt-2 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest"> */}
      {/* Hours */}
    {/* </span> */}
  {/* </div> */}
{/*  */}
  {/* <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900"> */}
    {/* : */}
  {/* </span> */}
{/*  */}
  {/* <div className="flex flex-col items-center"> */}
    {/* <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900"> */}
      {/* {String(minutes).padStart(2, "0")} */}
    {/* </span> */}
    {/* <span className="mt-2 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest"> */}
      {/* Minutes */}
    {/* </span> */}
  {/* </div> */}
{/*  */}
  {/* <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900"> */}
    {/* : */}
  {/* </span> */}
{/*  */}
  {/* <div className="flex flex-col items-center"> */}
    {/* <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900"> */}
      {/* {String(seconds).padStart(2, "0")} */}
    {/* </span> */}
    {/* <span className="mt-2 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest"> */}
      {/* Seconds */}
    {/* </span> */}
  {/* </div> */}
{/* </div> */}
{/*  */}
{/*  */}
{/*  */}
    {/* </div> */}
  // )
// }
// 
// export default Timer
// 


import React, { useState, useEffect } from "react";

const Timer = ({ targetDate }) => {
  const target = new Date(targetDate).getTime();

  const getRemainingTime = () => {
    const now = new Date().getTime();
    return Math.max(target - now, 0);
  };

  const [time, setTime] = useState(getRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getFormattedTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const days = Math.floor(totalHours / 24);
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getFormattedTime(time);

  return (
    <div className="text-center">
      <div className="flex justify-center items-start gap-3 sm:gap-5 md:gap-8 font-['Cinzel']">
        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900">
            {String(days).padStart(2, "0")}
          </span>
          <span className="mt-2 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest">
            Days
          </span>
        </div>

        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900">:</span>

        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900">
            {String(hours).padStart(2, "0")}
          </span>
          <span className="mt-2 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest">
            Hours
          </span>
        </div>

        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900">:</span>

        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900">
            {String(minutes).padStart(2, "0")}
          </span>
          <span className="mt-2 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest">
            Minutes
          </span>
        </div>

        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900">:</span>

        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900">
            {String(seconds).padStart(2, "0")}
          </span>
          <span className="mt-2 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;

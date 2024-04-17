import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setLessonType, setLessonDetails, setGroup, setStudent } from '../../model/ClassSlice';
import styles from "./ClassInfo.module.css";

const ClassInfo = () => {
    const dispatch = useDispatch();
    const lesson = useSelector(state => state.class.lesson);
    return (
        <div>
            <div>

            </div>
            <div>
                
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default ClassInfo;
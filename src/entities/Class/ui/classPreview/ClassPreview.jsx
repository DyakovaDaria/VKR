import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setLessonType, setLessonDetails, setGroup, setStudent } from '../../model/ClassSlice';
import styles from "./ClassPreview.module.css";

const ClassPreview = () => {
    const dispatch = useDispatch();
    const lesson = useSelector(state => state.class.lesson);
    return (
        <div className={styles.groupClassPreviewCont}>

        </div>
    );
}

export default ClassPreview;
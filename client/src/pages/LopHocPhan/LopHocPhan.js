//libs
import classNames from 'classnames/bind';
import styles from './LopHocPhan.module.scss';
import { useState } from 'react';

//component
import HeaderContent from '~/Layout/HeaderContent';
import Course from '~/components/Course';
import ChiTietLopHocPhan from './ChiTietLopHocPhan';

function LopHocPhan() {
    const cx = classNames.bind(styles);
    const [courses, setCourses] = useState([]);
    const valueState1 = [
        {
            title: 'Mã lớp HP',
        },
    ];
    const valueState2 = [
        {
            title: 'Tên lớp HP',
        },
    ];
    const valueState3 = [
        {
            title: 'Trạng thái',
        },
    ];

    const handleOnClick = () => {
        courses[courses.length] = <Course />;
        setCourses((prev) => {
            return [courses];
        });
    };

    return (
        <div className={cx('wrapper')}>
            <HeaderContent
                name="LỚP HỌC PHẦN"
                valueState1={valueState1}
                valueState2={valueState2}
                valueState3={valueState3}
                btnImport
                btnAdd
                onClickWhenAdd={handleOnClick}
            />
            <div className={cx('container')}>
                <div className={cx('courses', 'row')}>{courses.map((course, index) => course)}</div>
            </div>
        </div>
    );
}

export default LopHocPhan;

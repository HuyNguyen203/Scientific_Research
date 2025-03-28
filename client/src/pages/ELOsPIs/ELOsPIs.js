//libs
import classNames from 'classnames/bind';
import styles from './ELOsPIs.module.scss';
import { useEffect, useState } from 'react';

//components
import HeaderContent from '~/Layout/HeaderContent';
import TableELO from '~/components/Table/TableELO';
function ELOsPIs() {
    const cx = classNames.bind(styles);
    const [data, setData] = useState([]);
    const states = ['ELOs', 'MÔ TẢ', 'CHÚ THÍCH', ''];
    const formIdModalELO = '#exampleModalELO';
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

    const getData = async () => {
        try {
            let result = await fetch('http://localhost:4000/elos');
            const data = await result.json();

            setData(data);
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <HeaderContent
                name="ELOs & PIs"
                valueState1={valueState1}
                valueState2={valueState2}
                valueState3={valueState3}
                formId={formIdModalELO}
                btnImport
                btnAdd
            />

            <div className={cx('wrapper-table')}>
                <TableELO states={states} valueData={data} add edit formELOs formId={formIdModalELO} />
            </div>
        </div>
    );
}
export default ELOsPIs;

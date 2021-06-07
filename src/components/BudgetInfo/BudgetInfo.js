import React, { useEffect, useState } from 'react';
import './BudgetInfo.css'

import userData from '../../fakeData.json'
import Budgets from '../Budgets/Budgets';

const BudgetInfo = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(userData);
    },[])
    return (
        <div>
            {
                users.map(ud => <Budgets ud={ud}></Budgets>)
            }
        </div>
    );
};

export default BudgetInfo;
import React, { FC } from 'react';

interface ProgressProps {
    name: string;
    value: number;
}

const ProgressBar: FC<ProgressProps> = (props): JSX.Element => {
    return (
        <div className='m-2'>
            <p>{props.name}</p>
            <div className='max-w-full h-2.5 rounded-full bg-gray-200 m-3 progress_bar'>
                <div className={` h-2.5 rounded-full progress_bar`} style={{width: `${props.value}%`}}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
import React, { useState } from 'react';
import { folderStructure } from '../utils/helper';

const FileExplorer = () => {

    const [folderStatus, setFolderStatus] = useState({});

    const handleFolderClick = (folderName) => {
        setFolderStatus((prev) => ({
            ...prev,
            [folderName]: !prev[folderName],
        }))
    }

    const renderFolder = (response) => {
        return (
            <>
                {response.map((item, index) =>
                    <li key={item?.id}>
                        {item?.isFolder ? (
                            <div onClick={() => handleFolderClick(item.name)}>
                                <span>📁</span>
                                <span>{item?.name}</span>

                            </div>

                        ) : (

                            <span>{item?.name}</span>
                        )}
                        {folderStatus?.[item?.name] && item?.children && (
                            <div className='children'>
                                <ul>
                                    {renderFolder(item?.children)}
                                </ul>
                            </div>)
                        }
                    </li>

                )}
            </>
        )
    }

    return (
        <div className='container'>
            <div className='module-head'>
                <h2 className='module-title'>File Explorer - Machine Coding Interview</h2>
            </div>
            <div className='folder-structure'>
                <ul>
                    {renderFolder(folderStructure)}
                </ul>
            </div>
        </div>
    )
}

export default FileExplorer

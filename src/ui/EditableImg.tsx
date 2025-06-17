import { CSSProperties } from 'react';

interface EditableImgProps {
    src?: string;
    alt?: string;
    className?: string;
    propKey: string;
    style?: CSSProperties;
}

const EditableImg = ({ src, alt, className = '', propKey, style }: EditableImgProps) => {
    const imgSrc = src;
    const altText = alt;
    return (
        <img
            key={propKey}
            src={imgSrc}
            alt={altText}
            className={`${className}`}
            style={style}
        />
    )
};

export default EditableImg;

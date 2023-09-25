const SkillItem = ({ title, level, isActive }) => {
    return (
        <li className="item-skill">
            <span>{level}</span>
        </li>
    );
};

export default SkillItem;

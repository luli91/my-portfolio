import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

    return (
        <section id="skills" className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <h2>Frontend</h2>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="HMTL"/>
                <SkillList src={checkMarkIcon} skill="CSS"/>
                <SkillList src={checkMarkIcon} skill="Javascript"/>
                <SkillList src={checkMarkIcon} skill="React"/>
                <SkillList src={checkMarkIcon} skill="Chakra UI"/>
            </div>
            <hr />
            <h2>Backend</h2>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Node.js"/>
                <SkillList src={checkMarkIcon} skill="MongoDB"/>
                <SkillList src={checkMarkIcon} skill="Bootstrap"/>
                <SkillList src={checkMarkIcon} skill="Nest.js"/>
            </div>
            <hr />
            <h2>Tools</h2>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Git"/>
                <SkillList src={checkMarkIcon} skill="Github"/>
                <SkillList src={checkMarkIcon} skill="SEO"/>
                <SkillList src={checkMarkIcon} skill="Firebase"/>
                <SkillList src={checkMarkIcon} skill="Sass"/>
                <SkillList src={checkMarkIcon} skill="Figma"/>
            </div>
            <hr />
            <h2>Backend Tools</h2>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Express"/>
                <SkillList src={checkMarkIcon} skill="Passport"/>
                <SkillList src={checkMarkIcon} skill="Nodemailer"/>
                <SkillList src={checkMarkIcon} skill="Jsonwebtoken"/>
                <SkillList src={checkMarkIcon} skill="Dotenv"/>
                <SkillList src={checkMarkIcon} skill="Bcryptjs"/>
            </div>
        </section>
    )
}

export default Skills

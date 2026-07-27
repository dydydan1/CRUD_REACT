import styles from "./userProfile.module.css";
import LikeButton from "../likeButton/likeButton";


export default function UserProfile(props){

  let {firstName = "missing field", lastName = "missing field", skills = "missing field"} = props

    return (
        <>
            <section>
                
                <ul className={`${styles.userDetails} ${styles.border}`}>
                    <li>First Name: {firstName}</li>
                    <li>Last Name: {lastName}</li>
                    <li>Skills: {skills} </li>
                </ul>

                <LikeButton />

            </section>
        </>
    )
}   
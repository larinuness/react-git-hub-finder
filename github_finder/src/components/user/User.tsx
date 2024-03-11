import { Link } from "react-router-dom";
import { UserProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";
import styles from "./user.module.css";

type Props = {
  user: UserProps
}

export default function User({user}: Props) {
  return (
    <div className={styles.user}>
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.login}</h2>
      {/* só mostra se tiver location */}
      {user.location && (  <p className={styles.location}>
        <MdLocationPin />
        <span>{user.location}</span>
      </p>)}
      <div className={styles.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={styles.number}>{user.followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={styles.number}>{user.following}</p>
        </div>
      </div>
      <Link to={`/repos/${user.login}`}>Ver melhores projetos</Link>
    </div>
  );
}

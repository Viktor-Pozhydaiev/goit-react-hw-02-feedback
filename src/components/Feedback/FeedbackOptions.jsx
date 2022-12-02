import css from './Feedback.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={css.btn__list}>
      <li className={css.btn__item}>
        <button
          type="button"
          className={css.btn__style}
          onClick={onLeaveFeedback}
        >
          Good
        </button>
      </li>
      <li className={css.btn__item}>
        <button
          type="button"
          className={css.btn__style}
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
      </li>
      <li className={css.btn__item}>
        <button
          type="button"
          className={css.btn__style}
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

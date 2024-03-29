import Flex from "../Flex/Flex";
import styles from "./TestimonialsList.module.css";

const testimonials = [
  {
    author: "Angela Barez",
    testimonial: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        itaque quam eos totam hic illum reiciendis quia pariatur eveniet
        nam, animi ratione quaerat possimus explicabo quas at?
        Exercitationem, voluptas fugiat.`,
  },
  {
    author: "Angela Barez",
    testimonial: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        itaque quam eos totam hic illum reiciendis quia pariatur eveniet
        nam, animi ratione quaerat possimus explicabo quas at?
        Exercitationem, voluptas fugiat.`,
  },
  {
    author: "Angela Barez",
    testimonial: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        itaque quam eos totam hic illum reiciendis quia pariatur eveniet
        nam, animi ratione quaerat possimus explicabo quas at?
        Exercitationem, voluptas fugiat.`,
  },
] as const;

interface TestimonialsListProps {}

function TestimonialsList({}: TestimonialsListProps) {
  return (
    <Flex
      justifyContent="center"
      alignContent="center"
      gap="1rem"
      flexWrap="wrap"
      className={`${styles.testimonialsContainer} ${styles.padding}`}
    >
      {testimonials.map((testimonial) => {
        return (
          <div className={styles.testimonialCard} key={testimonial.author}>
            {testimonial.testimonial}
            <Flex justifyContent="flex-end">
              <small className={styles.testimonialCardAuthor}>
                <i>{testimonial.author}</i>
              </small>
            </Flex>
          </div>
        );
      })}
    </Flex>
  );
}

export default TestimonialsList;

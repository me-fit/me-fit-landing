import Flex from "../Flex/Flex";
import styles from "./TestimonialsList.module.css";

const testimonials = [
  {
    author: "Faytopia",
    testimonial:
      "I’m using this app after I was desperate to get back in shape, but didn’t know how. My instructor helped me with finding a suitable workout.",
  },
  {
    author: "Myrthe",
    testimonial:
      "Having experienced the app for a while now I can conclude the interactions are easy, clear examples on what you need to do and definitely in use separating itself from other apps and also more personal detail on what is beneficial for your own growth.",
  },
  {
    author: "Paula",
    testimonial:
      "I started using this app for the preparation and revalidation of my surgery. Not only is the layout of the app very neat and practical, it also helped me alot to stay consistent and to keep track of my improvements. They are very open for feedback and have many different exercises to choose from. Would definitely recommend!!!",
  },
  {
    author: "timeisindifferent",
    testimonial:
      "Having experienced the app for a while now I can conclude the interactions are easy, clear examples on what you need to do and definitely in use separating itself from other apps and also more personal detail on what is beneficial for your own growth. A blessing and would definitely recommend in both personal use and possibly other atmospheres too.",
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
            <p>{testimonial.testimonial}</p>
            <small className={styles.testimonialCardAuthor}>
              <i>{testimonial.author}</i>
            </small>
          </div>
        );
      })}
    </Flex>
  );
}

export default TestimonialsList;

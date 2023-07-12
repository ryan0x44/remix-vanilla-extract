import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import * as styles from "./styles.css";

const PopoverDemo = () => (
    <Popover.Root>
      <Popover.Trigger className={styles.PopoverTrigger}>More info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.PopoverContent}>
          Some more info…
          <Popover.Arrow className={styles.PopoverArrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
  
  export default PopoverDemo;
  
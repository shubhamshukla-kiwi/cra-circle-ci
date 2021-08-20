import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';


interface Props {
    history: History
}

const ScrollToTop = ({history}: Props) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
          window.scrollTo(0, 0);
        });
        return () => {
          unlisten();
        }
      }, []);
    
      return (null);
}

export default withRouter(ScrollToTop);
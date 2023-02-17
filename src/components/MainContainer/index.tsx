import InfoBlock from './InfoBlock';
import UsersSection from './UsersSection';
import FormSection from './Form';

function MainContainer() {
  return (
    <div className="main-container">
      <InfoBlock />
      <UsersSection />
      <FormSection />
    </div>
  );
}

export default MainContainer;

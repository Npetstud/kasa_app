import { useParams, Navigate } from "react-router-dom";
import DataFichLogement from "../../data/kasadata.json";
import Tag from "./Tag";
import Collapse from "../Collapse/Collapse";
import Carrousel from "./Carroussel";
import Rate from "./Rate";
import Host from "./Host";

const FicheLogementDisplay = () => {
  
  const { id } = useParams();

  const ficheLogement = DataFichLogement.find((logement) => logement.id === id);

  
  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  
  const equipements = ficheLogement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      {ficheLogement ? (
        <div>
          <Carrousel slides={ficheLogement?.pictures} />
          <section>
            <div>
              <div>
                <div>
                  <span>{ficheLogement?.title}</span>
                  <span>
                    {ficheLogement?.location}
                  </span>
                </div>
                
                <div>
                  {tagsLogement}
                </div>
              </div>

              <div>
               
                <div>
                  <Host
                    name={ficheLogement?.host.name}
                    picture={ficheLogement?.host.picture}
                  />
                </div>
                
                <div>
                  <Rate score={ficheLogement.rating} />
                </div>
              </div>
            </div>
          </section>
          
          <div>
            <div>
              <Collapse
                title="Description"
                content={ficheLogement?.description}
              />
            </div>
            <div>
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default FicheLogementDisplay;
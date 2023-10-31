import React from 'react';

export default function LegalNotice() {
  return (
    <>
      <h1 className="mb-14 mt-48 text-center text-4xl font-normal drop-shadow-md">
        Legal Notice
      </h1>
      <div className="container mx-auto flex flex-col-reverse gap-10 p-4 md:flex-row md:gap-48 lg:flex-row lg:gap-48">
        <div>
          <h2 className="mb-2 text-2xl font-normal">terms of use</h2>
          <h3 className="mb-2 text-xl font-normal">Reserved use</h3>
          <p className="mb-4 max-w-md">
            The use of this service is reserved. Any reproduction or
            representation, in whole or in part, for other purposes on any
            medium whatsoever is prohibited without the express prior
            authorization of the teams would constitute an infringement within
            the meaning of Articles L 335-2 et seq. of the Intellectual Property
            Code. Failure to comply with this prohibition constitutes an
            infringement which may incur the civil and criminal liability of the
            infringer.
          </p>
          <h3 className="mb-2 text-xl font-normal">
            Responsibility for content
          </h3>
          <p className="mb-4 max-w-md">
            The teams take great care in creating and updating this site.
            However, it cannot guarantee the accuracy of the information it
            contains. The user is aware that information, particularly on
            products and services offered, is subject to change without notice.
            The information contained in this service is non-contractual and
            subject to change without notice.
          </p>
          <h3 className="mb-2 text-xl font-normal">Copyright</h3>
          <p>The site is a creation protected by copyright.</p>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-normal">head office</h2>
          <div className="flex flex-col">
            <p>Jean-Antoine, Justine, Gregory, Amaury</p>
            <p>1 Av. du Champ de Mars</p>
            <p>45074 Orléans</p>
            <p>N° TEL : 06 93 53 76 60</p>
            <p>N° SIRET : 517 290 520 000 33</p>
          </div>

          <h2 className="mb-2 text-2xl font-normal">website publisher</h2>
          <p>Grégory Silvestri</p>
          <p>Justine Clément-Savary</p>
          <p>Jean-Antoine Alazard</p>
          <p>Amaury Becker</p>

          <h2 className="mb-2 text-2xl font-normal">Web host</h2>
          <p>GitHub</p>
        </div>
      </div>
    </>
  );
}

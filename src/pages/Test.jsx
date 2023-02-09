import { useState, Fragment } from "react";

import { Dialog, RadioGroup } from "@headlessui/react";
import { Tab } from "@headlessui/react";

import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";

import Layout from "../layouts/Layout";
import Container from "../components/Container";

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];

const genres = [
  {
    name: "Action",
    id: 1,
  },
  {
    name: "Multijoueur",
    id: 2,
  },
  {
    name: "RPG",
    id: 3,
  },
  {
    name: "Adventure",
    id: 4,
  },
];

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(plans[0]);
  const [selectedGenre, setSelectedGenre] = useState([genres[0]]);

  const CheckIcon = (props) => {
    return <Icon path={mdiCheckCircleOutline} size={1} />;
  };

  return (
    <Layout>
      <Container>
        <div>
          <button
            className="bg-yellow-400 p-2 text-white"
            onClick={() => setIsOpen(true)}
          >
            Ouvrir modal
          </button>
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-sm rounded bg-white border p-6 flex flex-col justify-center space-y-4">
                <Dialog.Title>Deactivate account</Dialog.Title>
                <Dialog.Description>
                  This will permanently deactivate your account
                </Dialog.Description>

                <p>
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </p>

                <button
                  className="bg-yellow-400 p-2 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Fermer
                </button>
              </Dialog.Panel>
            </div>
          </Dialog>
        </div>
        <div className="mt-8">
          <div>Radio group :</div>
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-y-2">
              {plans.map((plan) => (
                <RadioGroup.Option
                  key={plan.name}
                  value={plan}
                  className={({ active, checked }) =>
                    `${
                      checked ? "bg-yellow-400 text-white" : "bg-white"
                    } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-sky-100" : "text-gray-500"
                              }`}
                            >
                              <span>
                                {plan.ram}/{plan.cpus}
                              </span>{" "}
                              <span aria-hidden="true">&middot;</span>{" "}
                              <span>{plan.disk}</span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div>
          <Tab.Group>
            <Tab.List>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }
                  >
                    Connexion
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }
                  >
                    Inscription
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Salam 1</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div></div>
      </Container>
    </Layout>
  );
};

export default Test;

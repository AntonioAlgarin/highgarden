import axios from "axios";

const addRating = (payload) => {
  const config = {
    method: "POST",
    url: "/api/ratings",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const updateRating = (payload) => {
  const config = {
    method: "PUT",
    url: "api/ratings/id",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const summaryRatingByEntityId = (entityId, entityTypeId) => {
  const config = {
    method: "GET",
    url: "api/ratings/summary",
    data: entityId,
    entityTypeId,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const ratingService = { addRating, updateRating, summaryRatingByEntityId };
export default ratingService;

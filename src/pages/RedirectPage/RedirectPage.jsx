import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const RediractPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('./users')
  }, []);

  return (
    <>redirecting...</>
  )
}
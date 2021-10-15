import Head from "next/head";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import BookingLayout from "../../components/Bookings/BookingLayout";

const RePrintCN = () => {
  return (
    <div>
      <Head>
        <title>One Booking</title>
        <meta name="description" content="One Booking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BookingLayout />
        <div className="media mx-auto p-4 pt-2 flex gap-6">aa</div>
        <div className="media mx-auto p-4 flex justify-center items-center gap-2">
          <Button
            text="Refresh"
            bgColor="#F3F6F9"
            color="#3A3A3A"
            width="11rem"
          ></Button>
          <Button
            text="Save"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
          ></Button>
        </div>
      </Layout>
    </div>
  );
};

export default RePrintCN;

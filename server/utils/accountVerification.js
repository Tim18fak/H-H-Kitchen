const { timeBan } = require('./defaultFunc')

const ValidateAccount = async (Db, req, res, Banned) => {
  try {
    // Your code here
    console.log(req.body);
    const existDb = await Db.findOne({ ID: req.body.id });
    console.log(existDb);
    if (!existDb) {
      return res.status(404).json({
        error: "Id Mismatch",
        message: "doesn't match any in or database",
      });
    }

    const availableAttempts = existDb.activationAttempts;
    console.log(availableAttempts);

    //  function expression to set the temporary ban timeout

    const tempBan = timeBan();
    //  implement a temporary ban and a delay timer
    if (availableAttempts < 1) {
      await Db.findByIdAndDelete(existDb._id);
      const { email } = existDb;
      const Ban = new Banned({
        email,
        ip: req.ip,
        banTimeout: tempBan,
      });
      await Ban.save();
      return res.status(401).json({
        err: "Banned",
      });
    }

    if (existDb.activationCode !== parseInt(req.body.code)) {
      await Db.findByIdAndUpdate(existDiner._id, {
        activationAttempts: availableAttempts - 1,
      })
      return res.status(401).json({
        err: 'invalid',
        errResponse: '99',
      })
    }

    existDb.activationStatus = 'Fullfilled'

    await existDb.save()
    res.status(200).json({
      message: 'Verified',
    })
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = ValidateAccount

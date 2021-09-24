const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const {
    check,
    validationResult
} = require("express-validator");

const {
    csrfProtection,
    asyncHandler
} = require("./utils");

const {
    loginUser,
    logoutUser
} = require("../auth");

const router = express.Router();

/* GET users listing. */
router.get(
    "/",
    asyncHandler(async (req, res) => {
        res.render("layout")
    })
);
/// VALIDATORS
const userValidators = [
    check("userName")
    .exists({
        checkFalsy: true
    })
    .withMessage("Please provide a value for First Name")
    .isLength({
        max: 30
    })
    .withMessage("First Name must not be more than 30 characters long")
    .custom((value) => {
        return db.User.findOne({
            where: {
                userName: value
            }
        }).then(
            (user) => {
                if (user) {
                    return Promise.reject(
                        "That username is already in use by another account"
                    );
                }
                return true;
            }
        );
    }),
    check("email")
    .exists({
        checkFalsy: true
    })
    .withMessage("Please provide a value for Email Address")
    .isLength({
        max: 50
    })
    .withMessage("Email Address must not be more than 50 characters long")
    .isEmail()
    .withMessage("Email Address is not a valid email")
    .custom((value) => {
        return db.User.findOne({
            where: {
                email: value
            }
        }).then(
            (user) => {
                if (user) {
                    return Promise.reject(
                        "The email is already in use by another account"
                    );
                }
                return true;
            }
        );
    }),
    check("password")
    .exists({
        checkFalsy: true
    })
    .withMessage("Please provide a value for Password")
    .isLength({
        max: 50
    })
    .withMessage("Password must not be more than 50 characters long"),
    check("confirmPassword")
    .exists({
        checkFalsy: true
    })
    .withMessage("Please provide a value for Confirm Password")
    .isLength({
        max: 50
    })
    .withMessage("Confirm Password must not be more than 50 characters long")
    .custom((value, {
        req
    }) => {
        if (value !== req.body.password) {
            throw new Error("Confirm Password does not match Password");
        }
        return true;
    }),
];
////////////////////////////////////////////////////////////////////////////////

// LIST USERS
router.get('/', asyncHandler(async (req, res) => {
    const users = await db.User.findAll({
        attributes: ["userName"],
    });
    res.json({
        users,
    });
    // LIST USERS
}));
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     console.log("hello from user router");
//     const users = await db.User.findAll({
//       attributes: ["userName", "email"],
//     });
//     users.forEach((user) => console.log(user.userName, user.email));
//     res.send("hi");
//   })
// );

// USER INFO
router.get(
    "/:id(\\d+)",
    asyncHandler(async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        const user = await db.User.findByPk(userId);

        // WE WILL LATER CHECK PERSMISSIONS DURING AUTHORIZATION PHASE
        // checkPermissions(book, res.locals.user);

        res.render("user-id", {
            user,
        });
    })
);

// REGISTER
router.get("/register", csrfProtection, asyncHandler(async (req, res) => {
    res.render("user-registration", {
        csrfToken: req.csrfToken()
    });
}));

router.post("/register", csrfProtection, userValidators, asyncHandler(async (req, res) => {
    const {
        userName,
        email,
        password,
        confirmedPassword
    } = req.body;

    const user = db.User.build({
        userName,
        email,
        password,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.hashedPassword = hashedPassword;
        await user.save();
        loginUser(req, res, user);
        return req.session.save(() => res.redirect('/'));
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render("user-registration", {
            title: "Register",
            user,
            errors,
            csrfToken: req.csrfToken(),
        });
    }
}));

// LOGIN
router.get("/login", csrfProtection, asyncHandler(async (req, res) => {
    console.log("did this work");
    res.render("user-login", {
        title: "Login",
        csrfToken: req.csrfToken(),
    });
}));

router.post("/login", csrfProtection, asyncHandler(async (req, res) => {
    const {
        email,
        password
    } = req.body;
    const user = await db.User.findOne({
        where: {
            email,
        },
    });
    const passwordMatch = await bcrypt.compare(
        password,
        user.hashedPassword.toString()
    );
    if (passwordMatch) {
        // loginUser(req,res,user);
        // console.log(`hello ${user.userName}, ${user.email} from LOGIN ROUTE`);
        loginUser(req, res, user);
        return req.session.save(() => res.redirect('/'));
        //csrfToken: req.csrfToken(),
    } else {
        console.log(`Login unsuccessful`);
    }
}));

router.get(
    "/logout",
    asyncHandler(async (req, res) => {
        logoutUser(req, res)
        res.redirect('/users/login')
    })
);


module.exports = router;

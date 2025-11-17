Schemas

GroupCollapse allobject
	•	idCollapse allinteger Example1  
	•	nameCollapse allstring Example"Perch"  
UserCollapse allobject
	•	idinteger  
	•	activeCollapse allboolean Users can be deactivated. Once they are, you will stop seeing them and their data in responses. Organization administrators control user deactivation.     
	•	emailstringemail  
	•	org_idinteger  
	•	created_atCollapse allintegerunix Example1551376897  
	•	first_namestring  
	•	last_namestring  
	•	nameCollapse allstring Concatenated first and last name     
	•	genderCollapse allstring EnumCollapse allarray
	◦	#0"MALE"
	◦	#1"FEMALE"
	◦	#2"OTHER"
	•	  
	•	heightCollapse allnumberin Example72  
	•	weightCollapse allnumberlbs Example185  
	•	img_urlCollapse allstringurl Example"https://s3.amazonaws.com/bucket/image-file"  
RepCollapse allobject
The object representing an individual rep tracked by a Perch camera. You'll notice the lack of mean power stats, which are calculated simply by converting the corresponding mean velocity to m/s and multiplying by the weight in kg. Peak power stats are given in strange units. This is to make those fields independent from the Set.weight, which is an editable field required to calculate the actual power (i.e. in units of watts). Equations to convert these stats to watts are provided.
	•	limbCollapse allstring For a unilateral exercise, this is the limb with which the athlete used for this rep. For other exercises, this value will be null.    EnumCollapse allarray
	◦	#0"RIGHT"
	◦	#1"LEFT"
	•	  
	•	concentric_mean_velocity_zCollapse allnumberin / s The average vertical component of velocity for the concentric phase of the rep.    Example28.71  
	•	eccentric_mean_velocity_zCollapse allnumberin / s The average vertical component of velocity for the eccentric phase of the rep.    Example-26.45  
	•	concentric_peak_velocity_zCollapse allnumberin / s The maximum instantaneous vertical component of velocity for the concentric phase of the rep.    Example42.96  
	•	concentric_time_to_peak_velocity_zCollapse allnumbers The time (in seconds) the athelete took to achieve peak velocity (on the Z axis) during the concentric phase of the movement.     
	•	concentric_time_to_peak_power_zCollapse allnumbers The time (in seconds) the athelete took to achieve peak power during the concentric phase of the movement.     
	•	concentric_velocity_at_100_ms_zCollapse allnumberin / s The instantaneous velocity at 100ms into the concentric phase of the movement.     
	•	eccentric_peak_velocity_zCollapse allnumberin / s The maximum instantaneous vertical component of velocity for the eccentric phase of the rep.    Example3.31  
	•	concentric_peak_power_per_mass_zCollapse allnumberin^2 / sec^3 Convert to peak power in watts: (m/in)**2 * concentric_peak_power_per_mass_z * kg/lbs * Set.weight    Example15160.17  
	•	concentric_disp_zCollapse allnumberin Displacement of the concentric portion of the repetition along the Z axis in inches.    Example22.5  
	•	eccentric_disp_zCollapse allnumberin Displacement of the eccentric portion of the repetition along the Z axis in inches.    Example22.5  
SetErrorCollapse allobject
An object describing any reported issues from the user.
	•	missed_repsCollapse allboolean Whether the user indicated that reps were missed.     
	•	ghost_repsCollapse allboolean Whether the user indicated that some reps that were tracked were not actually performed.     
	•	wrong_valuesCollapse allboolean Whether the user indicated that some/all of the tracked metrics appeared incorrect.     
	•	ghost_rep_indicesCollapse allarray<integer> ItemsCollapse allinteger An index into the Set.reps array corresponding to a rep that was tracked that wasn"t performed by the user.        
SetCollapse allobject
An object representing a set tracked by or entered into Perch.
	•	idCollapse allinteger Unique id for the set     
	•	deletedCollapse allboolean Set to true if the User has marked the set as deleted.     
	•	created_atCollapse allnumberunix Example1561742528  
	•	user_idinteger  
	•	org_idCollapse allinteger The ID of the organization the user who performed the set belongs to.     
	•	exercise_idinteger  
	•	weightCollapse allnumberlbs The weight the lift was performed with.     
	•	pct_1rmCollapse allnumber The percentage [0.0 - 1.0] this set"s weight is of the user"s One Rep Max (1RM) for this exercise.    Example0.25  
	•	trackedCollapse allboolean Delineates whether this set was tracked by a Perch camera (true) or manually entered into Perch.     
	•	bands_usedCollapse allboolean Whether bands were used for this set.     
	•	chains_usedCollapse allboolean Whether chains were used for this set.     
	•	start_timeCollapse allnumberunix When the set was started.    Example1561742528  
	•	end_timeCollapse allnumberunix When the set was completed.    Example1561742528  
	•	errorCollapse allobject An object describing any reported issues from the user.   
	◦	missed_repsCollapse allboolean Whether the user indicated that reps were missed.     
	◦	ghost_repsCollapse allboolean Whether the user indicated that some reps that were tracked were not actually performed.     
	◦	wrong_valuesCollapse allboolean Whether the user indicated that some/all of the tracked metrics appeared incorrect.     
	◦	ghost_rep_indicesCollapse allarray<integer> ItemsCollapse allinteger An index into the Set.reps array corresponding to a rep that was tracked that wasn"t performed by the user.        
	•	  
	•	repsCollapse allarray<object> Contains all reps the Perch device tracked. Set.error.ghost_rep_indices optionally contains indices into this array that were marked by the user as erroneous and should be ignored.    ItemsCollapse allobject The object representing an individual rep tracked by a Perch camera. You'll notice the lack of mean power stats, which are calculated simply by converting the corresponding mean velocity to m/s and multiplying by the weight in kg. Peak power stats are given in strange units. This is to make those fields independent from the Set.weight, which is an editable field required to calculate the actual power (i.e. in units of watts). Equations to convert these stats to watts are provided.   
	◦	limbCollapse allstring For a unilateral exercise, this is the limb with which the athlete used for this rep. For other exercises, this value will be null.    EnumCollapse allarray
	▪	#0"RIGHT"
	▪	#1"LEFT"
	◦	  
	◦	concentric_mean_velocity_zCollapse allnumberin / s The average vertical component of velocity for the concentric phase of the rep.    Example28.71  
	◦	eccentric_mean_velocity_zCollapse allnumberin / s The average vertical component of velocity for the eccentric phase of the rep.    Example-26.45  
	◦	concentric_peak_velocity_zCollapse allnumberin / s The maximum instantaneous vertical component of velocity for the concentric phase of the rep.    Example42.96  
	◦	concentric_time_to_peak_velocity_zCollapse allnumbers The time (in seconds) the athelete took to achieve peak velocity (on the Z axis) during the concentric phase of the movement.     
	◦	concentric_time_to_peak_power_zCollapse allnumbers The time (in seconds) the athelete took to achieve peak power during the concentric phase of the movement.     
	◦	concentric_velocity_at_100_ms_zCollapse allnumberin / s The instantaneous velocity at 100ms into the concentric phase of the movement.     
	◦	eccentric_peak_velocity_zCollapse allnumberin / s The maximum instantaneous vertical component of velocity for the eccentric phase of the rep.    Example3.31  
	◦	concentric_peak_power_per_mass_zCollapse allnumberin^2 / sec^3 Convert to peak power in watts: (m/in)**2 * concentric_peak_power_per_mass_z * kg/lbs * Set.weight    Example15160.17  
	◦	concentric_disp_zCollapse allnumberin Displacement of the concentric portion of the repetition along the Z axis in inches.    Example22.5  
	◦	eccentric_disp_zCollapse allnumberin Displacement of the eccentric portion of the repetition along the Z axis in inches.    Example22.5  
	•	     
	•	num_repsCollapse allinteger The number of VALID reps on this set. This is the same as then length of the Reps array, unless the user marked an error and removed ghost reps. In that case, this count of reps reflects the removal of those ghost reps.     
	•	num_tracked_repsCollapse allinteger The number of reps the Perch camera tracked for this set. This will always be exactly the length of the Reps array.     
	•	first_limbCollapse allstring In a unilateral exercise, this is the limb with which the athlete began their reps.    EnumCollapse allarray
	◦	#0"RIGHT"
	◦	#1"LEFT"
	•	  
	•	limb_patternCollapse allstring Denotes the pattern used with executing a unilateral movement.    EnumCollapse allarray
	◦	#0"ALTERNATING"
	◦	#1"SEQUENTIAL"
	◦	#2"SINGLE"
	•	  
	•	min_mean_powerCollapse allnumberin * lbs / s The minimum of Rep.concentric_mean_velocity_z * Set.weight across all reps. Convert to watts: m/in * N/lbs * min_mean_power    Example1409.24  
	•	avg_mean_powerCollapse allnumberin * lbs / s The mean of Rep.concentric_mean_velocity_z * Set.weight across all reps. Convert to watts: m/in * N/lbs * avg_mean_power    Example1409.24  
	•	max_mean_powerCollapse allnumberin * lbs / s The max of Rep.concentric_mean_velocity_z * Set.weight across all reps. Convert to watts: m/in * N/lbs * max_mean_power    Example1536.75  
	•	min_mean_velocityCollapse allnumberin / s The minimum of Rep.concentric_mean_velocity_z across all reps. Convert to m/s: m/in * min_mean_velocity    Example31.32  
	•	avg_mean_velocityCollapse allnumberin / s The mean of Rep.concentric_mean_velocity_z across all reps. Convert to m/s: m/in * avg_mean_velocity    Example31.32  
	•	max_mean_velocityCollapse allnumberin / s The max of Rep.concentric_mean_velocity_z across all reps. Convert to m/s: m/in * max_mean_velocity    Example34.15  
	•	avg_ecc_mean_velocityCollapse allnumberin / s The mean of Rep.eccentric_mean_velocity_z across all reps. Convert to m/s: m/in * avg_ecc_mean_velocity    Example31.46  
	•	max_ecc_mean_velocityCollapse allnumberin / s The max of Rep.eccentric_mean_velocity_z across all reps. Convert to m/s: m/in * max_ecc_mean_velocity    Example39.12  
	•	min_ecc_mean_velocityCollapse allnumberin / s The min of Rep.eccentric_mean_velocity_z across all reps. Convert to m/s: m/in * min_ecc_mean_velocity    Example26.45  
	•	min_peak_powerCollapse allnumber(in^2 * lbs) / sec^3 The minimum of Rep.concentric_peak_power_per_mass_z * Set.weight across all reps. Convert to watts: m/in * m/in * kg/lbs * min_peak_power    Example2458751.45  
	•	avg_peak_powerCollapse allnumber(in^2 * lbs) / sec^3 The mean of Rep.concentric_peak_power_per_mass_z * Set.weight across all reps. Convert to watts: m/in * m/in * kg/lbs * avg_peak_power    Example2458751.45  
	•	max_peak_powerCollapse allnumber(in^2 * lbs) / sec^3 The max of Rep.concentric_peak_power_per_mass_z * Set.weight across all reps. Convert to watts: m/in * m/in * kg/lbs * max_peak_power    Example2458751.45  
	•	min_peak_velocityCollapse allnumberin / s The minimum of Rep.concentric_peak_velocity_z across all reps. Convert to m/s: m/in * min_peak_velocity    Example49.48  
	•	avg_peak_velocityCollapse allnumberin / s The mean of Rep.concentric_peak_velocity_z across all reps. Convert to m/s: m/in * avg_peak_velocity    Example49.48  
	•	max_peak_velocityCollapse allnumberin / s The max of Rep.concentric_peak_velocity_z across all reps. Convert to m/s: m/in * max_peak_velocity    Example55.98  
	•	avg_ecc_peak_velocityCollapse allnumberin / s The mean of Rep.eccentric_peak_velocity_z across all reps. Convert to m/s: m/in * avg_ecc_peak_velocity    Example48.3508597416838  
	•	max_ecc_peak_velocityCollapse allnumberin / s The max of Rep.eccentric_peak_velocity_z across all reps. Convert to m/s: m/in * max_ecc_peak_velocity    Example56.4116308796593  
	•	min_ecc_peak_velocityCollapse allnumberin / s The min of Rep.eccentric_peak_velocity_z across all reps. Convert to m/s: m/in * min_ecc_peak_velocity    Example41.24  
	•	avg_ecc_timeCollapse allnumbermicrosecond The mean of (Rep.eccentric_end_time - Rep.eccentric_end_time) across all reps. Convert to seconds: us/s * avg_ecc_time    Example758960.86  
	•	max_ecc_timeCollapse allnumbermicrosecond The max of (Rep.eccentric_end_time - Rep.eccentric_end_time) across all reps. Convert to seconds: us/s * max_ecc_time    Example850079.962962687  
	•	min_ecc_timeCollapse allnumbermicrosecond The min of (Rep.eccentric_end_time - Rep.eccentric_end_time) across all reps. Convert to seconds: us/s * min_ecc_time    Example603388.29  
	•	max_velocity_at_100_msCollapse allnumberin / s The maximum value of Rep.concentric_velocity_at_100_ms across all reps. Convert to m/s: m/in * max_velocity_at_100_ms     
	•	avg_velocity_at_100_msCollapse allnumberin / s The average value of Rep.concentric_velocity_at_100_ms across all reps. Convert to m/s: m/in * avg_velocity_at_100_ms     
	•	min_velocity_at_100_msCollapse allnumberin / s The minimum value of Rep.concentric_velocity_at_100_ms across all reps. Convert to m/s: m/in * min_velocity_at_100_ms     
	•	max_time_to_peak_velocityCollapse allnumbers The maximum value of Rep.concentric_time_to_peak_velocity across all reps.     
	•	avg_time_to_peak_velocityCollapse allnumbers The average value of Rep.concentric_time_to_peak_velocity across all reps.     
	•	min_time_to_peak_velocityCollapse allnumbers The minimum value of Rep.concentric_time_to_peak_velocity across all reps.     
	•	max_time_to_peak_powerCollapse allnumbers The maximum value of Rep.concentric_time_to_peak_power across all reps.     
	•	avg_time_to_peak_powerCollapse allnumbers The average value of Rep.concentric_time_to_peak_power across all reps.     
	•	min_time_to_peak_powerCollapse allnumbers The minimum value of Rep.concentric_time_to_peak_power across all reps.     
	•	avg_displacementCollapse allnumberin The average displacement in inches on the Z axis of the first portion of the movement (concentric or eccentric) in the exercise across all reps. This is computed using either Rep.concentric_disp_z or Rep.eccentric_disp_z depending on the exercise being performed.    Example22.5  
	•	min_displacementCollapse allnumberin The minimum displacement in inches on the Z axis of the first portion of the movement (concentric or eccentric) in the exercise across all reps. This is computed using either Rep.concentric_disp_z or Rep.eccentric_disp_z depending on the exercise being performed.    Example22.5  
	•	max_displacementCollapse allnumberin The maximum displacement in inches on the Z axis of the first portion of the movement (concentric or eccentric) in the exercise across all reps. This is computed using either Rep.concentric_disp_z or Rep.eccentric_disp_z depending on the exercise being performed.    Example22.5  
ExerciseCollapse allobject
	•	idinteger  
	•	namestring  
	•	org_idCollapse allinteger (Optional) Integer ID of the customer Group (aka Organization) that owns this exercise. Exercises with an org_id of null are considered "global" (meaning no Group owns the exercise and it is useable by any customer). Exercises with a non-null value for org_id are "owned" by the corresponding customer organization and only visible to / usable by that customer.     
	•	limbedCollapse allboolean Whether or not the exercise is performed on right and left limbs individually. E.g. Back Squat is not limbed, whereas Split Squat is limbed.     
	•	trackedCollapse allboolean Whether this exercise is tracked by the Perch camera or data is manually entered.     
StatCollapse allobject
	•	user_idinteger  
	•	typeCollapse allstring A descriptor for what this recorded stat is.    EnumCollapse allarray
	◦	#0"ONE_RM"
	•	  
	•	timestampCollapse allintegerunix Time at which the stat was recorded.     
	•	unitCollapse allstring The unit for this stat"s value.    EnumCollapse allarray
	◦	#0"LBS"
	◦	#1"KG"
	•	  
	•	valueCollapse allnumber The value recorded in this stat.     
	•	exercise_idCollapse allinteger If this stat is associated with an exercise, this is the id of said exercise. Otherwise, null.     
GenderCollapse allstring
EnumCollapse allarray
	•	#0"MALE"
	•	#1"FEMALE"
	•	#2"OTHER"
LimbPatternCollapse allstring
Denotes the pattern used with executing a unilateral movement.
EnumCollapse allarray
	•	#0"ALTERNATING"
	•	#1"SEQUENTIAL"
	•	#2"SINGLE"
InclusiveFilterCollapse allstring
EnumCollapse allarray
	•	#0"ONLY"
	•	#1"INCLUDE"
	•	#2"EXCLUDE"
UnixTimestampCollapse allnumberunix
Example1561742528
ApiPageParamsCollapse allobject
	•	limitCollapse allinteger Limit the number of data items returned per page. This will default to (and be capped at) the configured page size for each individual endpoint.     
	•	next_tokenCollapse allstring The next_token from a previous page response.     
FilterSetsParamsCollapse allobject
	•	limitCollapse allinteger Limit the number of data items returned per page. This will default to (and be capped at) the configured page size for each individual endpoint.     
	•	next_tokenCollapse allstring The next_token from a previous page response.     
	•	idCollapse allinteger Retrieve a single set with this ID (response data will be a single object not an array).     
	•	user_idCollapse allinteger Retrieve only sets for the user with ID = user_id.     
	•	group_idCollapse allinteger Retrieve only sets for users in the group with the corresponding id. This can be set to the org_id of a user, which would filter for all users in said organization.     
	•	exercise_idCollapse allinteger Retrieve only sets for the exercise with ID = exercise_id.     
	•	begin_timeCollapse allnumberunix Retrieve only sets where Set.start_time >= begin_time.    Example1561742528  
	•	end_timeCollapse allnumberunix Retrieve only sets where Set.start_time < end_time.    Example1561742528  
	•	untrackedCollapse allstring Controls whether manually entered sets are returned.    EnumCollapse allarray
	◦	#0"ONLY"
	◦	#1"INCLUDE"
	◦	#2"EXCLUDE"
	•	 Default"INCLUDE"  
	•	include_repsCollapse allboolean By specifying include_reps = true, the reps field will be included on Sets returned. Otherwise, it will be omitted.    Defaultfalse  
FilterExercisesParamsCollapse allobject
	•	limitCollapse allinteger Limit the number of data items returned per page. This will default to (and be capped at) the configured page size for each individual endpoint.     
	•	next_tokenCollapse allstring The next_token from a previous page response.     
	•	idCollapse allinteger Retrieve a single exercise with this ID (response data will be a single object not an array).     
	•	untrackedCollapse allstring Control whether exercises which are manually input are included    EnumCollapse allarray
	◦	#0"ONLY"
	◦	#1"INCLUDE"
	◦	#2"EXCLUDE"
	•	 Default"INCLUDE"  
	•	inactiveCollapse allstring Control whether exercises which have been archived are included    EnumCollapse allarray
	◦	#0"ONLY"
	◦	#1"INCLUDE"
	◦	#2"EXCLUDE"
	•	 Default"INCLUDE"  
FilterStatsParamsCollapse allobject
	•	limitCollapse allinteger Limit the number of data items returned per page. This will default to (and be capped at) the configured page size for each individual endpoint.     
	•	next_tokenCollapse allstring The next_token from a previous page response.     
	•	user_idCollapse allinteger Retrieve only stats for the user with ID = user_id.     
	•	group_idCollapse allinteger Retrieve only stats for users in the group with ID = group_id.     
	•	exercise_idCollapse allinteger Retrieve only sets for the exercise with ID = exercise_id.     
	•	begin_timeCollapse allnumberunix Retrieve only stats where Stat.timestamp >= begin_time.    Example1561742528  
	•	end_timeCollapse allnumberunix Retrieve only stats where Stat.timestamp < end_time.    Example1561742528  
	•	typeCollapse allstring A descriptor for what this recorded stat represents.    EnumCollapse allarray
	◦	#0"ONE_RM"
	•	  
FilterUsersParamsCollapse allobject
	•	limitCollapse allinteger Limit the number of data items returned per page. This will default to (and be capped at) the configured page size for each individual endpoint.     
	•	next_tokenCollapse allstring The next_token from a previous page response.     
	•	idCollapse allinteger Retrieve a single user with this ID (response data will be a single object not an array).     
	•	group_idCollapse allinteger Retrieve users who are members of a group (with id group_id).     
CreateUserParamsCollapse allobject
	•	dataCollapse allobject
	◦	emailstringemail  
	◦	first_namestring  
	◦	last_namestring  
	◦	genderCollapse allstring EnumCollapse allarray
	▪	#0"MALE"
	▪	#1"FEMALE"
	▪	#2"OTHER"
	◦	  
	◦	heightCollapse allnumberin Height in floating point inches.    Example72  
	◦	weightCollapse allnumberlbs Weight in floating point inches.    Example185  
	•	  
UpdateUserParamsCollapse allobject
	•	dataCollapse allobject
	◦	idCollapse allinteger ID of user you want to update.     
	◦	activeCollapse allboolean A boolean indicating if the user is active.     
	◦	first_namestring  
	◦	last_namestring  
	◦	genderCollapse allstring EnumCollapse allarray
	▪	#0"MALE"
	▪	#1"FEMALE"
	▪	#2"OTHER"
	◦	  
	◦	heightCollapse allnumberin Height in floating point inches.    Example72  
	◦	weightCollapse allnumberlbs Weight in floating point inches.    Example185  
	•	  
ApiPageResponseCollapse allobject
	•	truncatedCollapse allboolean Indicates that the result set was truncated and there are more results.     
	•	next_tokenCollapse allstring When truncated = true, next_token will be non-null and can be used to retrieve further results. Send next_token in a subsequent request to the same endpoint using the same POST body to get the next set of results.     
GenericSuccessResponseCollapse allobject
	•	successCollapse allboolean Whether the action succeeded.     
FilterExercisesResponseCollapse allobject
	•	truncatedCollapse allboolean Indicates that the result set was truncated and there are more results.     
	•	next_tokenCollapse allstring When truncated = true, next_token will be non-null and can be used to retrieve further results. Send next_token in a subsequent request to the same endpoint using the same POST body to get the next set of results.     
	•	dataCollapse all(array<object> | object) One ofCollapse all(array<object> | object)
	◦	#0Collapse allarray<object> ItemsCollapse allobject
	▪	idinteger  
	▪	namestring  
	▪	org_idCollapse allinteger (Optional) Integer ID of the customer Group (aka Organization) that owns this exercise. Exercises with an org_id of null are considered "global" (meaning no Group owns the exercise and it is useable by any customer). Exercises with a non-null value for org_id are "owned" by the corresponding customer organization and only visible to / usable by that customer.     
	▪	limbedCollapse allboolean Whether or not the exercise is performed on right and left limbs individually. E.g. Back Squat is not limbed, whereas Split Squat is limbed.     
	▪	trackedCollapse allboolean Whether this exercise is tracked by the Perch camera or data is manually entered.     
	◦	     
	◦	#1Collapse allobject
	▪	idinteger  
	▪	namestring  
	▪	org_idCollapse allinteger (Optional) Integer ID of the customer Group (aka Organization) that owns this exercise. Exercises with an org_id of null are considered "global" (meaning no Group owns the exercise and it is useable by any customer). Exercises with a non-null value for org_id are "owned" by the corresponding customer organization and only visible to / usable by that customer.     
	▪	limbedCollapse allboolean Whether or not the exercise is performed on right and left limbs individually. E.g. Back Squat is not limbed, whereas Split Squat is limbed.     
	▪	trackedCollapse allboolean Whether this exercise is tracked by the Perch camera or data is manually entered.     
	◦	  
	•	  
FilterSetsResponseCollapse allobject
	•	truncatedCollapse allboolean Indicates that the result set was truncated and there are more results.     
	•	next_tokenCollapse allstring When truncated = true, next_token will be non-null and can be used to retrieve further results. Send next_token in a subsequent request to the same endpoint using the same POST body to get the next set of results.     
	•	dataCollapse all(array<object> | object) One ofCollapse all(array<object> | object)
	◦	#0Collapse allarray<object> ItemsCollapse allobject An object representing a set tracked by or entered into Perch.   
	▪	idCollapse allinteger Unique id for the set     
	▪	deletedCollapse allboolean Set to true if the User has marked the set as deleted.     
	▪	created_atCollapse allnumberunix Example1561742528  
	▪	user_idinteger  
	▪	org_idCollapse allinteger The ID of the organization the user who performed the set belongs to.     
	▪	exercise_idinteger  
	▪	weightCollapse allnumberlbs The weight the lift was performed with.     
	▪	pct_1rmCollapse allnumber The percentage [0.0 - 1.0] this set"s weight is of the user"s One Rep Max (1RM) for this exercise.    Example0.25  
	▪	trackedCollapse allboolean Delineates whether this set was tracked by a Perch camera (true) or manually entered into Perch.     
	▪	bands_usedCollapse allboolean Whether bands were used for this set.     
	▪	chains_usedCollapse allboolean Whether chains were used for this set.     
	▪	start_timeCollapse allnumberunix When the set was started.    Example1561742528  
	▪	end_timeCollapse allnumberunix When the set was completed.    Example1561742528  
	▪	errorCollapse allobject An object describing any reported issues from the user.   
	▪	missed_repsCollapse allboolean Whether the user indicated that reps were missed.     
	▪	ghost_repsCollapse allboolean Whether the user indicated that some reps that were tracked were not actually performed.     
	▪	wrong_valuesCollapse allboolean Whether the user indicated that some/all of the tracked metrics appeared incorrect.     
	▪	ghost_rep_indicesCollapse allarray<integer> ItemsCollapse allinteger An index into the Set.reps array corresponding to a rep that was tracked that wasn"t performed by the user.        
	▪	  
	▪	repsCollapse allarray<object> Contains all reps the Perch device tracked. Set.error.ghost_rep_indices optionally contains indices into this array that were marked by the user as erroneous and should be ignored.    ItemsCollapse allobject The object representing an individual rep tracked by a Perch camera. You'll notice the lack of mean power stats, which are calculated simply by converting the corresponding mean velocity to m/s and multiplying by the weight in kg. Peak power stats are given in strange units. This is to make those fields independent from the Set.weight, which is an editable field required to calculate the actual power (i.e. in units of watts). Equations to convert these stats to watts are provided.   
	▪	limbCollapse allstring For a unilateral exercise, this is the limb with which the athlete used for this rep. For other exercises, this value will be null.    EnumCollapse allarray
	▪	#0"RIGHT"
	▪	#1"LEFT"
	▪	  
	▪	concentric_mean_velocity_zCollapse allnumberin / s The average vertical component of velocity for the concentric phase of the rep.    Example28.71  
	▪	eccentric_mean_velocity_zCollapse allnumberin / s The average vertical component of velocity for the eccentric phase of the rep.    Example-26.45  
	▪	concentric_peak_velocity_zCollapse allnumberin / s The maximum instantaneous vertical component of velocity for the concentric phase of the rep.    Example42.96  
	▪	concentric_time_to_peak_velocity_zCollapse allnumbers The time (in seconds) the athelete took to achieve peak velocity (on the Z axis) during the concentric phase of the movement.     
	▪	concentric_time_to_peak_power_zCollapse allnumbers The time (in seconds) the athelete took to achieve peak power during the concentric phase of the movement.     
	▪	concentric_velocity_at_100_ms_zCollapse allnumberin / s The instantaneous velocity at 100ms into the concentric phase of the movement.     
	▪	eccentric_peak_velocity_zCollapse allnumberin / s The maximum instantaneous vertical component of velocity for the eccentric phase of the rep.    Example3.31  
	▪	concentric_peak_power_per_mass_zCollapse allnumberin^2 / sec^3 Convert to peak power in watts: (m/in)**2 * concentric_peak_power_per_mass_z * kg/lbs * Set.weight    Example15160.17  
	▪	concentric_disp_zCollapse allnumberin Displacement of the concentric portion of the repetition along the Z axis in inches.    Example22.5  
	▪	eccentric_disp_zCollapse allnumberin Displacement of the eccentric portion of the repetition along the Z axis in inches.    Example22.5  
	▪	     
	▪	num_repsCollapse allinteger The number of VALID reps on this set. This is the same as then length of the Reps array, unless the user marked an error and removed ghost reps. In that case, this count of reps reflects the removal of those ghost reps.     
	▪	num_tracked_repsCollapse allinteger The number of reps the Perch camera tracked for this set. This will always be exactly the length of the Reps array.     
	▪	first_limbCollapse allstring In a unilateral exercise, this is the limb with which the athlete began their reps.    EnumCollapse allarray
	▪	#0"RIGHT"
	▪	#1"LEFT"
	▪	  
	▪	limb_patternCollapse allstring Denotes the pattern used with executing a unilateral movement.    EnumCollapse allarray
	▪	#0"ALTERNATING"
	▪	#1"SEQUENTIAL"
	▪	#2"SINGLE"
	▪	  
	▪	min_mean_powerCollapse allnumberin * lbs / s The minimum of Rep.concentric_mean_velocity_z * Set.weight across all reps. Convert to watts: m/in * N/lbs * min_mean_power    Example1409.24  
	▪	avg_mean_powerCollapse allnumberin * lbs / s The mean of Rep.concentric_mean_velocity_z * Set.weight across all reps. Convert to watts: m/in * N/lbs * avg_mean_power    Example1409.24  
	▪	max_mean_powerCollapse allnumberin * lbs / s The max of Rep.concentric_mean_velocity_z * Set.weight across all reps. Convert to watts: m/in * N/lbs * max_mean_power    Example1536.75  
	▪	min_mean_velocityCollapse allnumberin / s The minimum of Rep.concentric_mean_velocity_z across all reps. Convert to m/s: m/in * min_mean_velocity    Example31.32  
	▪	avg_mean_velocityCollapse allnumberin / s The mean of Rep.concentric_mean_velocity_z across all reps. Convert to m/s: m/in * avg_mean_velocity    Example31.32  
	▪	max_mean_velocityCollapse allnumberin / s The max of Rep.concentric_mean_velocity_z across all reps. Convert to m/s: m/in * max_mean_velocity    Example34.15  
	▪	avg_ecc_mean_velocityCollapse allnumberin / s The mean of Rep.eccentric_mean_velocity_z across all reps. Convert to m/s: m/in * avg_ecc_mean_velocity    Example31.46  
	▪	max_ecc_mean_velocityCollapse allnumberin / s The max of Rep.eccentric_mean_velocity_z across all reps. Convert to m/s: m/in * max_ecc_mean_velocity    Example39.12  
	▪	min_ecc_mean_velocityCollapse allnumberin / s The min of Rep.eccentric_mean_velocity_z across all reps. Convert to m/s: m/in * min_ecc_mean_velocity    Example26.45  
	▪	min_peak_powerCollapse allnumber(in^2 * lbs) / sec^3 The minimum of Rep.concentric_peak_power_per_mass_z * Set.weight across all reps. Convert to watts: m/in * m/in * kg/lbs * min_peak_power    Example2458751.45  
	▪	avg_peak_powerCollapse allnumber(in^2 * lbs) / sec^3 The mean of Rep.concentric_peak_power_per_mass_z * Set.weight across all reps. Convert to watts: m/in * m/in * kg/lbs * avg_peak_power    Example2458751.45  
	▪	max_peak_powerCollapse allnumber(in^2 * lbs) / sec^3 The max of Rep.concentric_peak_power_per_mass_z * Set.weight across all reps. Convert to watts: m/in * m/in * kg/lbs * max_peak_power    Example2458751.45  
	▪	min_peak_velocityCollapse allnumberin / s The minimum of Rep.concentric_peak_velocity_z across all reps. Convert to m/s: m/in * min_peak_velocity    Example49.48  
	▪	avg_peak_velocityCollapse allnumberin / s The mean of Rep.concentric_peak_velocity_z across all reps. Convert to m/s: m/in * avg_peak_velocity    Example49.48  
	▪	max_peak_velocityCollapse allnumberin / s The max of Rep.concentric_peak_velocity_z across all reps. Convert to m/s: m/in * max_peak_velocity    Example55.98  
	▪	avg_ecc_peak_velocityCollapse allnumberin / s The mean of Rep.eccentric_peak_velocity_z across all reps. Convert to m/s: m/in * avg_ecc_peak_velocity    Example48.3508597416838  
	▪	max_ecc_peak_velocityCollapse allnumberin / s The max of Rep.eccentric_peak_velocity_z across all reps. Convert to m/s: m/in * max_ecc_peak_velocity    Example56.4116308796593  
	▪	min_ecc_peak_velocityCollapse allnumberin / s The min of Rep.eccentric_peak_velocity_z across all reps. Convert to m/s: m/in * min_ecc_peak_velocity    Example41.24  
	▪	avg_ecc_timeCollapse allnumbermicrosecond The mean of (Rep.eccentric_end_time - Rep.eccentric_end_time) across all reps. Convert to seconds: us/s * avg_ecc_time    Example758960.86  
	▪	max_ecc_timeCollapse allnumbermicrosecond The max of (Rep.eccentric_end_time - Rep.eccentric_end_time) across all reps. Convert to seconds: us/s * max_ecc_time    Example850079.962962687  
	▪	min_ecc_timeCollapse allnumbermicrosecond The min of (Rep.eccentric_end_time - Rep.eccentric_end_time) across all reps. Convert to seconds: us/s * min_ecc_time    Example603388.29  
	▪	max_velocity_at_100_msCollapse allnumberin / s The maximum value of Rep.concentric_velocity_at_100_ms across all reps. Convert to m/s: m/in * max_velocity_at_100_ms     
	▪	avg_velocity_at_100_msCollapse allnumberin / s The average value of Rep.concentric_velocity_at_100_ms across all reps. Convert to m/s: m/in * avg_velocity_at_100_ms     
	▪	min_velocity_at_100_msCollapse allnumberin / s The minimum value of Rep.concentric_velocity_at_100_ms across all reps. Convert to m/s: m/in * min_velocity_at_100_ms     
	▪	max_time_to_peak_velocityCollapse allnumbers The maximum value of Rep.concentric_time_to_peak_velocity across all reps.     
	▪	avg_time_to_peak_velocityCollapse allnumbers The average value of Rep.concentric_time_to_peak_velocity across all reps.     
	▪	min_time_to_peak_velocityCollapse allnumbers The minimum value of Rep.concentric_time_to_peak_velocity across all reps.     
	▪	max_time_to_peak_powerCollapse allnumbers The maximum value of Rep.concentric_time_to_peak_power across all reps.     
	▪	avg_time_to_peak_powerCollapse allnumbers The average value of Rep.concentric_time_to_peak_power across all reps.     
	▪	min_time_to_peak_powerCollapse allnumbers The minimum value of Rep.concentric_time_to_peak_power across all reps.     
	▪	avg_displacementCollapse allnumberin The average displacement in inches on the Z axis of the first portion of the movement (concentric or eccentric) in the exercise across all reps. This is computed using either Rep.concentric_disp_z or Rep.eccentric_disp_z depending on the exercise being performed.    Example22.5  
	▪	min_displacementCollapse allnumberin The minimum displacement in inches on the Z axis of the first portion of the movement (concentric or eccentric) in the exercise across all reps. This is computed using either Rep.concentric_disp_z or Rep.eccentric_disp_z depending on the exercise being performed.    Example22.5  
	▪	max_displacementCollapse allnumberin The maximum displacement in inches on the Z axis of the first portion of the movement (concentric or eccentric) in the exercise across all reps. This is computed using either Rep.concentric_disp_z or Rep.eccentric_disp_z depending on the exercise being performed.    Example22.5  
	◦	     
	◦	#1Collapse allobject An object representing a set tracked by or entered into Perch.   
	▪	idCollapse allinteger Unique id for the set     
	▪	deletedCollapse allboolean Set to true if the User has marked the set as deleted.     
	▪	created_atCollapse allnumberunix Example1561742528  
	▪	user_idinteger  
	▪	org_idCollapse allinteger The ID of the organization the user who performed the set belongs to.     
	▪	exercise_idinteger  
	▪	weightCollapse allnumberlbs The weight the lift was performed with.     
	▪	pct_1rmCollapse allnumber The percentage [0.0 - 1.0] this set"s weight is of the user"s One Rep Max (1RM) for this exercise.    Example0.25  
	▪	trackedCollapse allboolean Delineates whether this set was tracked by a Perch camera (true) or manually entered into Perch.     
	▪	bands_usedCollapse allboolean Whether bands were used for this set.     
	▪	chains_usedCollapse allboolean Whether chains were used for this set.     
	▪	start_timeCollapse allnumberunix When the set was started.    Example1561742528  
	▪	end_timeCollapse allnumberunix When the set was completed.    Example1561742528  
	▪	errorCollapse allobject An object describing any reported issues from the user.   
	▪	missed_repsCollapse allboolean Whether the user indicated that reps were missed.     
	▪	ghost_repsCollapse allboolean Whether the user indicated that some reps that were tracked were not actually performed.     
	▪	wrong_valuesCollapse allboolean Whether the user indicated that some/all of the tracked metrics appeared incorrect.     
	▪	ghost_rep_indicesCollapse allarray<integer> ItemsCollapse allinteger An index into the Set.reps array corresponding to a rep that was tracked that wasn"t performed by the user.        
	▪	  
	▪	repsCollapse allarray<object> Contains all reps the Perch device tracked. Set.error.ghost_rep_indices optionally contains indices into this array that were marked by the user as erroneous and should be ignored.    ItemsCollapse allobject The object representing an individual rep tracked by a Perch camera. You'll notice the lack of mean power stats, which are calculated simply by converting the corresponding mean velocity to m/s and multiplying by the weight in kg. Peak power stats are given in strange units. This is to make those fields independent from the Set.weight, which is an editable field required to calculate the actual power (i.e. in units of watts). Equations to convert these stats to watts are provided.   
	▪	limbCollapse allstring For a unilateral exercise, this is the limb with which the athlete used for this rep. For other exercises, this value will be null.    EnumCollapse allarray
	▪	#0"RIGHT"
	▪	#1"LEFT"
	▪	  
	▪	concentric_mean_velocity_zCollapse allnumberin / s The average vertical component of velocity for the concentric phase of the rep.    Example28.71  
	▪	eccentric_mean_velocity_zCollapse allnumberin / s The average vertical component of velocity for the eccentric phase of the rep.    Example-26.45  
	▪	concentric_peak_velocity_zCollapse allnumberin / s The maximum instantaneous vertical component of velocity for the concentric phase of the rep.    Example42.96  
	▪	concentric_time_to_peak_velocity_zCollapse allnumbers The time (in seconds) the athelete took to achieve peak velocity (on the Z axis) during the concentric phase of the movement.     
	▪	concentric_time_to_peak_power_zCollapse allnumbers The time (in seconds) the athelete took to achieve peak power during the concentric phase of the movement.     
	▪	concentric_velocity_at_100_ms_zCollapse allnumberin / s The instantaneous velocity at 100ms into the concentric phase of the movement.     
	▪	eccentric_peak_velocity_zCollapse allnumberin / s The maximum instantaneous vertical component of velocity for the eccentric phase of the rep.    Example3.31  
	▪	concentric_peak_power_per_mass_zCollapse allnumberin^2 / sec^3 Convert to peak power in watts: (m/in)**2 * concentric_peak_power_per_mass_z * kg/lbs * Set.weight    Example15160.17  
	▪	concentric_disp_zCollapse allnumberin Displacement of the concentric portion of the repetition along the Z axis in inches.    Example22.5  
	▪	eccentric_disp_zCollapse allnumberin Displacement of the eccentric portion of the repetition along the Z axis in inches.    Example22.5  
	▪	     
	▪	num_repsCollapse allinteger The number of VALID reps on this set. This is the same as then length of the Reps array, unless the user marked an error and removed ghost reps. In that case, this count of reps reflects the removal of those ghost reps.     
	▪	num_tracked_repsCollapse allinteger The number of reps the Perch camera tracked for this set. This will always be exactly the length of the Reps array.     
	▪	first_limbCollapse allstring In a unilateral exercise, this is the limb with which the athlete began their reps.    EnumCollapse allarray
	▪	#0"RIGHT"
	▪	#1"LEFT"
	▪	  
	▪	limb_patternCollapse allstring Denotes the pattern used with executing a unilateral movement.    EnumCollapse allarray
	▪	#0"ALTERNATING"
	▪	#1"SEQUENTIAL"
	▪	#2"SINGLE"
	▪	  
	▪	min_mean_powerCollapse allnumberin * lbs / s The minimum of Rep.concentric_mean_velocity_z * Set.weight across all reps. Convert to watts: m/in * N/lbs * min_mean_power    Example1409.24  
	▪	avg_mean_powerCollapse allnumberin * lbs / s The mean of Rep.concentric_mean_velocity_z * Set.weight across all reps. Convert to watts: m/in * N/lbs * avg_mean_power    Example1409.24  
	▪	max_mean_powerCollapse allnumberin * lbs / s The max of Rep.concentric_mean_velocity_z * Set.weight across all reps. Convert to watts: m/in * N/lbs * max_mean_power    Example1536.75  
	▪	min_mean_velocityCollapse allnumberin / s The minimum of Rep.concentric_mean_velocity_z across all reps. Convert to m/s: m/in * min_mean_velocity    Example31.32  
	▪	avg_mean_velocityCollapse allnumberin / s The mean of Rep.concentric_mean_velocity_z across all reps. Convert to m/s: m/in * avg_mean_velocity    Example31.32  
	▪	max_mean_velocityCollapse allnumberin / s The max of Rep.concentric_mean_velocity_z across all reps. Convert to m/s: m/in * max_mean_velocity    Example34.15  
	▪	avg_ecc_mean_velocityCollapse allnumberin / s The mean of Rep.eccentric_mean_velocity_z across all reps. Convert to m/s: m/in * avg_ecc_mean_velocity    Example31.46  
	▪	max_ecc_mean_velocityCollapse allnumberin / s The max of Rep.eccentric_mean_velocity_z across all reps. Convert to m/s: m/in * max_ecc_mean_velocity    Example39.12  
	▪	min_ecc_mean_velocityCollapse allnumberin / s The min of Rep.eccentric_mean_velocity_z across all reps. Convert to m/s: m/in * min_ecc_mean_velocity    Example26.45  
	▪	min_peak_powerCollapse allnumber(in^2 * lbs) / sec^3 The minimum of Rep.concentric_peak_power_per_mass_z * Set.weight across all reps. Convert to watts: m/in * m/in * kg/lbs * min_peak_power    Example2458751.45  
	▪	avg_peak_powerCollapse allnumber(in^2 * lbs) / sec^3 The mean of Rep.concentric_peak_power_per_mass_z * Set.weight across all reps. Convert to watts: m/in * m/in * kg/lbs * avg_peak_power    Example2458751.45  
	▪	max_peak_powerCollapse allnumber(in^2 * lbs) / sec^3 The max of Rep.concentric_peak_power_per_mass_z * Set.weight across all reps. Convert to watts: m/in * m/in * kg/lbs * max_peak_power    Example2458751.45  
	▪	min_peak_velocityCollapse allnumberin / s The minimum of Rep.concentric_peak_velocity_z across all reps. Convert to m/s: m/in * min_peak_velocity    Example49.48  
	▪	avg_peak_velocityCollapse allnumberin / s The mean of Rep.concentric_peak_velocity_z across all reps. Convert to m/s: m/in * avg_peak_velocity    Example49.48  
	▪	max_peak_velocityCollapse allnumberin / s The max of Rep.concentric_peak_velocity_z across all reps. Convert to m/s: m/in * max_peak_velocity    Example55.98  
	▪	avg_ecc_peak_velocityCollapse allnumberin / s The mean of Rep.eccentric_peak_velocity_z across all reps. Convert to m/s: m/in * avg_ecc_peak_velocity    Example48.3508597416838  
	▪	max_ecc_peak_velocityCollapse allnumberin / s The max of Rep.eccentric_peak_velocity_z across all reps. Convert to m/s: m/in * max_ecc_peak_velocity    Example56.4116308796593  
	▪	min_ecc_peak_velocityCollapse allnumberin / s The min of Rep.eccentric_peak_velocity_z across all reps. Convert to m/s: m/in * min_ecc_peak_velocity    Example41.24  
	▪	avg_ecc_timeCollapse allnumbermicrosecond The mean of (Rep.eccentric_end_time - Rep.eccentric_end_time) across all reps. Convert to seconds: us/s * avg_ecc_time    Example758960.86  
	▪	max_ecc_timeCollapse allnumbermicrosecond The max of (Rep.eccentric_end_time - Rep.eccentric_end_time) across all reps. Convert to seconds: us/s * max_ecc_time    Example850079.962962687  
	▪	min_ecc_timeCollapse allnumbermicrosecond The min of (Rep.eccentric_end_time - Rep.eccentric_end_time) across all reps. Convert to seconds: us/s * min_ecc_time    Example603388.29  
	▪	max_velocity_at_100_msCollapse allnumberin / s The maximum value of Rep.concentric_velocity_at_100_ms across all reps. Convert to m/s: m/in * max_velocity_at_100_ms     
	▪	avg_velocity_at_100_msCollapse allnumberin / s The average value of Rep.concentric_velocity_at_100_ms across all reps. Convert to m/s: m/in * avg_velocity_at_100_ms     
	▪	min_velocity_at_100_msCollapse allnumberin / s The minimum value of Rep.concentric_velocity_at_100_ms across all reps. Convert to m/s: m/in * min_velocity_at_100_ms     
	▪	max_time_to_peak_velocityCollapse allnumbers The maximum value of Rep.concentric_time_to_peak_velocity across all reps.     
	▪	avg_time_to_peak_velocityCollapse allnumbers The average value of Rep.concentric_time_to_peak_velocity across all reps.     
	▪	min_time_to_peak_velocityCollapse allnumbers The minimum value of Rep.concentric_time_to_peak_velocity across all reps.     
	▪	max_time_to_peak_powerCollapse allnumbers The maximum value of Rep.concentric_time_to_peak_power across all reps.     
	▪	avg_time_to_peak_powerCollapse allnumbers The average value of Rep.concentric_time_to_peak_power across all reps.     
	▪	min_time_to_peak_powerCollapse allnumbers The minimum value of Rep.concentric_time_to_peak_power across all reps.     
	▪	avg_displacementCollapse allnumberin The average displacement in inches on the Z axis of the first portion of the movement (concentric or eccentric) in the exercise across all reps. This is computed using either Rep.concentric_disp_z or Rep.eccentric_disp_z depending on the exercise being performed.    Example22.5  
	▪	min_displacementCollapse allnumberin The minimum displacement in inches on the Z axis of the first portion of the movement (concentric or eccentric) in the exercise across all reps. This is computed using either Rep.concentric_disp_z or Rep.eccentric_disp_z depending on the exercise being performed.    Example22.5  
	▪	max_displacementCollapse allnumberin The maximum displacement in inches on the Z axis of the first portion of the movement (concentric or eccentric) in the exercise across all reps. This is computed using either Rep.concentric_disp_z or Rep.eccentric_disp_z depending on the exercise being performed.    Example22.5  
	◦	  
	•	  
	•	refsCollapse allobject
	◦	exercisesCollapse allarray<object> ItemsCollapse allobject
	▪	idinteger  
	▪	namestring  
	▪	org_idCollapse allinteger (Optional) Integer ID of the customer Group (aka Organization) that owns this exercise. Exercises with an org_id of null are considered "global" (meaning no Group owns the exercise and it is useable by any customer). Exercises with a non-null value for org_id are "owned" by the corresponding customer organization and only visible to / usable by that customer.     
	▪	limbedCollapse allboolean Whether or not the exercise is performed on right and left limbs individually. E.g. Back Squat is not limbed, whereas Split Squat is limbed.     
	▪	trackedCollapse allboolean Whether this exercise is tracked by the Perch camera or data is manually entered.     
	◦	     
	◦	usersCollapse allarray<object> ItemsCollapse allobject
	▪	idinteger  
	▪	activeCollapse allboolean Users can be deactivated. Once they are, you will stop seeing them and their data in responses. Organization administrators control user deactivation.     
	▪	emailstringemail  
	▪	org_idinteger  
	▪	created_atCollapse allintegerunix Example1551376897  
	▪	first_namestring  
	▪	last_namestring  
	▪	nameCollapse allstring Concatenated first and last name     
	▪	genderCollapse allstring EnumCollapse allarray
	▪	#0"MALE"
	▪	#1"FEMALE"
	▪	#2"OTHER"
	▪	  
	▪	heightCollapse allnumberin Example72  
	▪	weightCollapse allnumberlbs Example185  
	▪	img_urlCollapse allstringurl Example"https://s3.amazonaws.com/bucket/image-file"  
	◦	     
	•	  
FilterUsersResponseCollapse allobject
	•	truncatedCollapse allboolean Indicates that the result set was truncated and there are more results.     
	•	next_tokenCollapse allstring When truncated = true, next_token will be non-null and can be used to retrieve further results. Send next_token in a subsequent request to the same endpoint using the same POST body to get the next set of results.     
	•	dataCollapse all(array<object> | object) One ofCollapse all(array<object> | object)
	◦	#0Collapse allarray<object> ItemsCollapse allobject
	▪	idinteger  
	▪	activeCollapse allboolean Users can be deactivated. Once they are, you will stop seeing them and their data in responses. Organization administrators control user deactivation.     
	▪	emailstringemail  
	▪	org_idinteger  
	▪	created_atCollapse allintegerunix Example1551376897  
	▪	first_namestring  
	▪	last_namestring  
	▪	nameCollapse allstring Concatenated first and last name     
	▪	genderCollapse allstring EnumCollapse allarray
	▪	#0"MALE"
	▪	#1"FEMALE"
	▪	#2"OTHER"
	▪	  
	▪	heightCollapse allnumberin Example72  
	▪	weightCollapse allnumberlbs Example185  
	▪	img_urlCollapse allstringurl Example"https://s3.amazonaws.com/bucket/image-file"  
	◦	     
	◦	#1Collapse allobject
	▪	idinteger  
	▪	activeCollapse allboolean Users can be deactivated. Once they are, you will stop seeing them and their data in responses. Organization administrators control user deactivation.     
	▪	emailstringemail  
	▪	org_idinteger  
	▪	created_atCollapse allintegerunix Example1551376897  
	▪	first_namestring  
	▪	last_namestring  
	▪	nameCollapse allstring Concatenated first and last name     
	▪	genderCollapse allstring EnumCollapse allarray
	▪	#0"MALE"
	▪	#1"FEMALE"
	▪	#2"OTHER"
	▪	  
	▪	heightCollapse allnumberin Example72  
	▪	weightCollapse allnumberlbs Example185  
	▪	img_urlCollapse allstringurl Example"https://s3.amazonaws.com/bucket/image-file"  
	◦	  
	•	  
GetUserResponseCollapse allobject
	•	dataCollapse allobject
	◦	idinteger  
	◦	activeCollapse allboolean Users can be deactivated. Once they are, you will stop seeing them and their data in responses. Organization administrators control user deactivation.     
	◦	emailstringemail  
	◦	org_idinteger  
	◦	created_atCollapse allintegerunix Example1551376897  
	◦	first_namestring  
	◦	last_namestring  
	◦	nameCollapse allstring Concatenated first and last name     
	◦	genderCollapse allstring EnumCollapse allarray
	▪	#0"MALE"
	▪	#1"FEMALE"
	▪	#2"OTHER"
	◦	  
	◦	heightCollapse allnumberin Example72  
	◦	weightCollapse allnumberlbs Example185  
	◦	img_urlCollapse allstringurl Example"https://s3.amazonaws.com/bucket/image-file"  
	•	  
CreateUserResponseCollapse allobject
	•	successCollapse allboolean Whether the action succeeded.     
	•	idCollapse allinteger The id of the User created.     
FilterStatsResponseCollapse allobject
	•	truncatedCollapse allboolean Indicates that the result set was truncated and there are more results.     
	•	next_tokenCollapse allstring When truncated = true, next_token will be non-null and can be used to retrieve further results. Send next_token in a subsequent request to the same endpoint using the same POST body to get the next set of results.     
	•	dataCollapse allarray<object> ItemsCollapse allobject
	◦	user_idinteger  
	◦	typeCollapse allstring A descriptor for what this recorded stat is.    EnumCollapse allarray
	▪	#0"ONE_RM"
	◦	  
	◦	timestampCollapse allintegerunix Time at which the stat was recorded.     
	◦	unitCollapse allstring The unit for this stat"s value.    EnumCollapse allarray
	▪	#0"LBS"
	▪	#1"KG"
	◦	  
	◦	valueCollapse allnumber The value recorded in this stat.     
	◦	exercise_idCollapse allinteger If this stat is associated with an exercise, this is the id of said exercise. Otherwise, null.     
	•	     
